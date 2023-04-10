import { Component } from '@angular/core';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  data: any[] = []

  queryTypes: string[] = ["games", "characters", "places", "monters", "bosses", "items", "dungeons"]

  constructor(private apiService: ApiService) {}

  option= ''

  ngOnInit(): void {
  }

  llenarData() {
    this.apiService.getData(this.option).subscribe(data => {
      this.data = data.data
      console.log(this.data)
    })
  }

}
