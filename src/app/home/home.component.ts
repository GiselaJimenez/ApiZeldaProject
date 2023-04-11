import { Component } from '@angular/core';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['../../../node_modules/bootstrap/dist/css/bootstrap.css']
})
export class HomeComponent {

  data: any[] = []

  queryTypes: string[] = ["games", "characters", "places", "monsters", "bosses", "items", "dungeons"]

  constructor(private apiService: ApiService) {}

  option= ''
  public page!: number

  ngOnInit(): void {
  }

  addData() {
    this.apiService.getData(this.option).subscribe(data => {
      this.data = data.data
      console.log(this.data)
    })
  }

}
