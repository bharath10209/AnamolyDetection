import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ChartsModule } from "ng2-charts";
import { TicketCounterGraphComponent } from "./components/ticket-counter-graph/ticket-counter-graph.component";
import { ForcastedTableComponent } from "./components/forcasted-table/forcasted-table.component";
import { SharedModule } from "../shared/shared.module";
import { WindowsMemoryUtilizationTableComponent } from "./components/windows-memory-utilization-table/windows-memory-utilization-table.component";
import { WindowsCpuUtilizationTableComponent } from "./components/windows-cpu-utilization-table/windows-cpu-utilization-table.component";
import { WindowsMemoryUtilizationGraphComponent } from "./components/windows-memory-utilization-graph/windows-memory-utilization-graph.component";
import { CpuUtilizationGraphComponent } from "./components/cpu-utilization-graph/cpu-utilization-graph.component";
import { CpuLinuxUtilisationComponent } from './components/cpu-linux-utilisation/cpu-linux-utilisation.component';

@NgModule({
  declarations: [
    TicketCounterGraphComponent,
    ForcastedTableComponent,
    CpuUtilizationGraphComponent,
    WindowsMemoryUtilizationTableComponent,
    WindowsCpuUtilizationTableComponent,
    WindowsMemoryUtilizationGraphComponent,
    CpuLinuxUtilisationComponent
  ],
  imports: [CommonModule, ChartsModule, SharedModule],
  exports: [
    ChartsModule,
    TicketCounterGraphComponent,
    ForcastedTableComponent,
    CpuUtilizationGraphComponent,
    WindowsMemoryUtilizationTableComponent,
    WindowsCpuUtilizationTableComponent,
    WindowsMemoryUtilizationGraphComponent,
    CpuLinuxUtilisationComponent
  ]
})
export class GraphsModule {}
