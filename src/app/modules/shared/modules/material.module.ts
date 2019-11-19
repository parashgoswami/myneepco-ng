import { NgModule } from '@angular/core';
import {MatCardModule, MatButtonModule, MatInputModule} from '@angular/material';
const MatModules = [MatCardModule, MatButtonModule,MatInputModule];
@NgModule({
  declarations: [],
  imports: MatModules,
  exports: MatModules
})
export class MaterialModule { }
