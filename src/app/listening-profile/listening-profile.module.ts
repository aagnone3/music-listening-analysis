import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListeningProfileRoutingModule } from './listening-profile-routing.module';
import { SharedModule } from '../shared/shared.module';
import { ListeningProfileComponent } from './listening-profile/listening-profile.component';
import { QuickCreateComponent } from './quick-create/quick-create.component';

@NgModule({
  imports: [
    CommonModule,
    ListeningProfileRoutingModule,
    SharedModule
  ],
  declarations: [
    ListeningProfileComponent,
    QuickCreateComponent
  ],
  entryComponents: [
  ]
})
export class ListeningProfileModule { }
