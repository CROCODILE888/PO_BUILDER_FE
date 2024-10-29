import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{

  constructor(private authService: AuthService){};
  ngOnInit() {
    this.authService.testBackend().subscribe(
      response => console.log('Backend Response:', response),
      error => console.error('Error:', error)
    );
  }
  title = 'po_builder_FE';
}