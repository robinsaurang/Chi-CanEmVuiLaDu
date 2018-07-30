import { ModuleImportGuardModule } from './module-import-guard.module';

describe('ModuleImportGuardModule', () => {
  let moduleImportGuardModule: ModuleImportGuardModule;

  beforeEach(() => {
    moduleImportGuardModule = new ModuleImportGuardModule();
  });

  it('should create an instance', () => {
    expect(moduleImportGuardModule).toBeTruthy();
  });
});
