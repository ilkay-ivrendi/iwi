import { async, TestBed } from '@angular/core/testing';
import { IwiUiModule } from './iwi-ui.module';

describe('IwiUiModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [IwiUiModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(IwiUiModule).toBeDefined();
  });
});
