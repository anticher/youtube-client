import { CUSTOM_ELEMENTS_SCHEMA, DebugElement } from '@angular/core';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { AbstractControl, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { of } from 'rxjs';
import { AuthService } from '../../services/auth.service';
import { LoginFormComponent } from './login-form.component';

describe('LoginFormComponent', () => {
    let component: LoginFormComponent;
    let fixture: ComponentFixture<LoginFormComponent>;
    let mockLoginService: any;

    beforeEach(async () => {
        mockLoginService = {
            login: jasmine.createSpy('login').and.returnValue(undefined)
        };

        await TestBed.configureTestingModule({
            declarations: [LoginFormComponent],
            imports: [ReactiveFormsModule],
            providers: [{ provide: AuthService, useValue: mockLoginService }],
            schemas: [
                CUSTOM_ELEMENTS_SCHEMA
            ],
        })
            .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(LoginFormComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should has <form> with "login-form" class and correct controls count', () => {
        const formLoginElement: HTMLInputElement = fixture.debugElement.nativeElement;
        const form: HTMLElement = formLoginElement.querySelector('form.login-form')!;
        const controlElements: NodeListOf<HTMLInputElement> = formLoginElement.querySelectorAll('.login-form__input')
        expect(form).toBeTruthy();
        expect(controlElements.length).toEqual(2);
    });

    it('check form init values', () => {
        const FormGroup: FormGroup = component.form;
        const formValues = {
            login: '',
            password: '',
        }
        expect(FormGroup.value).toEqual(formValues);
    });

    it('check login form values before input values starts', () => {
        const formLoginElement: HTMLInputElement = fixture.debugElement.nativeElement.querySelectorAll('.login-form__input')[0];
        const formPasswordElement: HTMLInputElement = fixture.debugElement.nativeElement.querySelectorAll('.login-form__input')[1];
        const loginControl: AbstractControl | null = component.form.get('login');
        const passwordControl: AbstractControl | null = component.form.get('password');
        expect(formLoginElement.value).toEqual(loginControl!.value);
        expect(loginControl!.errors).not.toBeNull;
        expect(loginControl!.errors!['required']).toBeTruthy;
        expect(formPasswordElement.value).toEqual(passwordControl!.value);
        expect(passwordControl!.errors).not.toBeNull;
        expect(passwordControl!.errors!['required']).toBeTruthy;
    });

    it('check login form values and validators after entering value', waitForAsync(() => {
        const formLoginElement: HTMLInputElement = fixture.debugElement.nativeElement.querySelectorAll('.login-form__input')[0];
        const formPasswordElement: HTMLInputElement = fixture.debugElement.nativeElement.querySelectorAll('.login-form__input')[1];
        formLoginElement.value = 'test@test.com';
        formPasswordElement.value = '1234aA!Aa4321';
        formLoginElement.dispatchEvent(new Event('input'));
        formPasswordElement.dispatchEvent(new Event('input'));
        const isFormValid: boolean = component.form.valid
        fixture.autoDetectChanges();
        fixture.whenStable().then(() => {
            const loginControl: AbstractControl | null = component.form.get('login');
            const passwordControl: AbstractControl | null = component.form.get('password');
            expect(formLoginElement.value).toEqual(loginControl!.value);
            expect(formPasswordElement.value).toEqual(passwordControl!.value);
            expect(loginControl!.errors).toBeNull;
            expect(passwordControl!.errors).toBeNull;
            expect(isFormValid).toBeTruthy;
        })
    }))
});
