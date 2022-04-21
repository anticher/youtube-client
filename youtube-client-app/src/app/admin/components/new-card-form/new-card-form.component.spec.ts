import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, fakeAsync, TestBed, tick, waitForAsync } from '@angular/core/testing';
import { AbstractControl, ReactiveFormsModule } from '@angular/forms';
import { Store } from '@ngxs/store';
import { of } from 'rxjs';

import { NewCardFormComponent } from './new-card-form.component';

describe('NewCardFormComponent', () => {
    let component: NewCardFormComponent;
    let fixture: ComponentFixture<NewCardFormComponent>;
    let mockStore: any;

    beforeEach(async () => {
        mockStore = jasmine.createSpyObj(['select', 'dispatch'])

        await TestBed.configureTestingModule({
            declarations: [NewCardFormComponent],
            imports: [ReactiveFormsModule],
            providers: [{ provide: Store, useValue: mockStore }],
            schemas: [
                CUSTOM_ELEMENTS_SCHEMA
            ],
        })
            .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(NewCardFormComponent);
        component = fixture.componentInstance;
        mockStore.select.and.returnValue(of([]))
        mockStore.dispatch.and.returnValue()
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should has <form> with "new-card-form" class and correct controls count', () => {
        const formLoginElement: HTMLInputElement = fixture.debugElement.nativeElement;
        const form: HTMLElement = formLoginElement.querySelector('form.new-card-form')!;
        const inputControlElements: NodeListOf<HTMLInputElement> = formLoginElement.querySelectorAll('.new-card-form__input')
        const textareaControlElements: NodeListOf<HTMLInputElement> = formLoginElement.querySelectorAll('.new-card-form__textarea')
        expect(form).toBeTruthy();
        expect(inputControlElements.length).toEqual(4);
        expect(textareaControlElements.length).toEqual(1);
    });

    it('check new-card-form init values', () => {
        const FormGroup = component.form;
        const formValues = {
            title: '',
            description: '',
            img: '',
            video: '',
            date: '',
        }
        expect(FormGroup.value).toEqual(formValues);
    });

    it('check new-card-form values before input values starts', () => {
        const [formTitleElement, formImgElement, formVideoElement, formDateElement]: HTMLInputElement[] = fixture.debugElement.nativeElement.querySelectorAll('.new-card-form__input')
        const formDescriptionElement: HTMLInputElement = fixture.debugElement.nativeElement.querySelectorAll('.new-card-form__textarea')[0];

        const titleControl: AbstractControl | null = component.form.get('title');
        const descriptionControl: AbstractControl | null = component.form.get('description');
        const imgControl: AbstractControl | null = component.form.get('img');
        const videoControl: AbstractControl | null = component.form.get('video');
        const dateControl: AbstractControl | null = component.form.get('date');

        expect(formTitleElement.value).toEqual(titleControl!.value);
        expect(titleControl!.errors).not.toBeNull;
        expect(titleControl!.errors!['required']).toBeTruthy;

        expect(formDescriptionElement.value).toEqual(descriptionControl!.value);
        expect(descriptionControl!.errors).not.toBeNull;

        expect(formImgElement.value).toEqual(imgControl!.value);
        expect(imgControl!.errors).not.toBeNull;
        expect(imgControl!.errors!['required']).toBeTruthy;

        expect(formVideoElement.value).toEqual(videoControl!.value);
        expect(videoControl!.errors).not.toBeNull;
        expect(videoControl!.errors!['required']).toBeTruthy;

        expect(formDateElement.value).toEqual(dateControl!.value);
        expect(dateControl!.errors).not.toBeNull;
        expect(dateControl!.errors!['required']).toBeTruthy;
    });

    it('check new-card-form values and validators after entering value', waitForAsync(() => {
        const [formTitleElement, formImgElement, formVideoElement, formDateElement]: HTMLInputElement[] = fixture.debugElement.nativeElement.querySelectorAll('.new-card-form__input')
        const formDescriptionElement: HTMLInputElement = fixture.debugElement.nativeElement.querySelectorAll('.new-card-form__textarea')[0];
        formTitleElement.value = 'test test test';
        formDescriptionElement.value = 'test test test test test test';
        formImgElement.value = 'https://www.test.com/';
        formVideoElement.value = 'https://www.test.com/';
        formDateElement.value = Date.now().toString();

        formTitleElement.dispatchEvent(new Event('input'));
        formDescriptionElement.dispatchEvent(new Event('input'));
        formImgElement.dispatchEvent(new Event('input'));
        formVideoElement.dispatchEvent(new Event('input'));
        formDateElement.dispatchEvent(new Event('input'));

        const isFormValid: boolean = component.form.valid

        fixture.whenStable().then(() => {
            expect(isFormValid).toBeTruthy;
        })
        fixture.autoDetectChanges();

        fixture.whenStable().then(() => {
            const titleControl: AbstractControl | null = component.form.get('title');
            const descriptionControl: AbstractControl | null = component.form.get('description');
            const imgControl: AbstractControl | null = component.form.get('img');
            const videoControl: AbstractControl | null = component.form.get('video');
            const dateControl: AbstractControl | null = component.form.get('date');

            expect(formTitleElement.value).toEqual(titleControl!.value);
            expect(formDescriptionElement.value).toEqual(descriptionControl!.value);
            expect(formImgElement.value).toEqual(imgControl!.value);
            expect(formVideoElement.value).toEqual(videoControl!.value);
            expect(formDateElement.value).toEqual(dateControl!.value);

            expect(titleControl!.errors).toBeNull;
            expect(descriptionControl!.errors).toBeNull;
            expect(imgControl!.errors).toBeNull;
            expect(videoControl!.errors).toBeNull;
            expect(dateControl!.errors).toBeNull;
        })
    }))

    it('should submit', () => {
        component.cardSubmit()
        expect(mockStore.dispatch).toHaveBeenCalledTimes(1)
    });
});
