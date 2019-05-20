import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { OvmSharedLibsModule, OvmSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective } from './';

@NgModule({
  imports: [OvmSharedLibsModule, OvmSharedCommonModule],
  declarations: [JhiLoginModalComponent, HasAnyAuthorityDirective],
  entryComponents: [JhiLoginModalComponent],
  exports: [OvmSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class OvmSharedModule {
  static forRoot() {
    return {
      ngModule: OvmSharedModule
    };
  }
}
