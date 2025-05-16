import { Component, OnInit } from '@angular/core';
import { AirlinesService, Airline } from '../../shared/airlines.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  airlines: Airline[] = [];
  loading = true;
  error = '';

  constructor(private svc: AirlinesService) {}

  ngOnInit() {
    this.svc.getAirlines().subscribe({
      next: data => {
        this.airlines = data;
        this.loading = false;
      },
      error: err => {
        this.error = 'Error cargando aerolíneas';
        console.error(err);
        this.loading = false;
      }
    });
  }
}

