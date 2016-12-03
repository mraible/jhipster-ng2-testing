import {
    ComponentFixture,
    TestBed
} from '@angular/core/testing';
import { BlogAppModule } from '../../../main/webapp/app/app.ng2module';
import { HelloWorldComponent } from '../../../main/webapp/app/helloWorld.component';

describe('hello-world component', () => {

    beforeEach(() => {
        TestBed.configureTestingModule({imports: [BlogAppModule]});
    });

    it('should say hello world', () => {
        const fixture: ComponentFixture<HelloWorldComponent> = TestBed.createComponent(HelloWorldComponent);
        fixture.detectChanges();
        expect(fixture.nativeElement.innerHTML.trim()).toEqual('Hello world!');
    });

});
