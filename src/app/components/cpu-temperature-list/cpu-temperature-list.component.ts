import { Component, OnInit } from '@angular/core';
import { CpuTemperatureService } from 'src/app/services/cpu-temperature.service';
import { CPUTemperature } from 'src/app/model/cpu-temperatur';

@Component({
  selector: 'app-cpu-temperature-list',
  templateUrl: './cpu-temperature-list.component.html',
  styleUrls: ['./cpu-temperature-list.component.css']
})
export class CpuTemperatureListComponent implements OnInit {

  cpuTemperatures: CPUTemperature[] = [];

  constructor(private cpuTemperatureService: CpuTemperatureService) { }

  ngOnInit() {

    this.getCPUTemperatures();

  }

  getCPUTemperatures(): void {

    this.cpuTemperatureService.getCPUTemperatures().subscribe( cpuTemperatures => {

      this.cpuTemperatures = cpuTemperatures;

    });

  }

  getDate(timestamp: number): Date {

    return  new Date(timestamp * 1000);

  }

}
