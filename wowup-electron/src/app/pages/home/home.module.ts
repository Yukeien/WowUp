import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { HomeRoutingModule } from "./home-routing.module";

import { HomeComponent } from "./home.component";
import { SharedModule } from "../../shared/shared.module";
import { MatModule } from "../../mat-module";
import { MyAddonsComponent } from "../my-addons/my-addons.component";
import { OptionsComponent } from "../options/options.component";
import { GetAddonsComponent } from "../get-addons/get-addons.component";
import { AboutComponent } from "../about/about.component";
import { PotentialAddonTableColumnComponent } from "app/components/potential-addon-table-column/potential-addon-table-column.component";
import { MyAddonsAddonCellComponent } from "app/components/my-addons-addon-cell/my-addons-addon-cell.component";
import { ProgressSpinnerComponent } from "app/components/progress-spinner/progress-spinner.component";
import { DownloadCountPipe } from "app/pipes/download-count.pipe";
import { InterfaceFormatPipe } from "app/pipes/interface-format.pipe";
import { GetAddonListItemFilePropPipe } from "app/pipes/get-addon-list-item-file-prop.pipe";
import { TelemetryDialogComponent } from "app/components/telemetry-dialog/telemetry-dialog.component";
import { ConfirmDialogComponent } from "app/components/confirm-dialog/confirm-dialog.component";
import { AlertDialogComponent } from "app/components/alert-dialog/alert-dialog.component";
import { WowClientOptionsComponent } from "app/components/wow-client-options/wow-client-options.component";
import { DirectiveModule } from "app/directive.module";
import { InstallFromUrlDialogComponent } from "app/components/install-from-url-dialog/install-from-url-dialog.component";
import { AddonDetailComponent } from "app/components/addon-detail/addon-detail.component";
import { AddonProviderBadgeComponent } from "app/components/addon-provider-badge/addon-provider-badge.component";
import { AddonInstallButtonComponent } from "app/components/addon-install-button/addon-install-button.component";
import { GetAddonStatusColumnComponent } from "app/components/get-addon-status-column/get-addon-status-column.component";
import { MyAddonStatusColumnComponent } from "app/components/my-addon-status-column/my-addon-status-column.component";
import { ProgressButtonComponent } from "app/components/progress-button/progress-button.component";
import { AddonUpdateButtonComponent } from "app/components/addon-update-button/addon-update-button.component";

@NgModule({
  declarations: [
    HomeComponent,
    MyAddonsComponent,
    AboutComponent,
    GetAddonsComponent,
    OptionsComponent,
    MyAddonsAddonCellComponent,
    ProgressSpinnerComponent,
    PotentialAddonTableColumnComponent,
    DownloadCountPipe,
    InterfaceFormatPipe,
    GetAddonListItemFilePropPipe,
    TelemetryDialogComponent,
    ConfirmDialogComponent,
    AlertDialogComponent,
    WowClientOptionsComponent,
    InstallFromUrlDialogComponent,
    AddonDetailComponent,
    AddonProviderBadgeComponent,
    AddonInstallButtonComponent,
    GetAddonStatusColumnComponent,
    MyAddonStatusColumnComponent,
    ProgressButtonComponent,
    AddonUpdateButtonComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    HomeRoutingModule,
    MatModule,
    DirectiveModule,
  ],
})
export class HomeModule {}
