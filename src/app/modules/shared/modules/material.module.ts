import { NgModule } from '@angular/core';
import {MatCardModule, MatButtonModule, MatInputModule, MatToolbarModule} from '@angular/material';
const MatModules = [MatCardModule, MatButtonModule, MatInputModule, MatToolbarModule];
@NgModule({
  declarations: [],
  imports: MatModules,
  exports: MatModules
})
export class MaterialModule { }
