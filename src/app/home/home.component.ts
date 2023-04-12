import { Component } from '@angular/core';
import { ApiService } from '../service/api.service';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['../../../node_modules/bootstrap/dist/css/bootstrap.css']
})
export class HomeComponent {

  data: any[] = []

  queryTypes: string[] = ["games", "characters", "places", "monsters", "bosses", "items", "dungeons"]

  private unsubscribe$ = new Subject<void>();

  constructor(private apiService: ApiService) {}

  option= ''
  public page!: number

  ngOnDestroy() {this.unsubscribe$.next() }

  ngOnInit(): void {}

  addData() {
    this.apiService.getData(this.option)
    .pipe(takeUntil(this.unsubscribe$))
    .subscribe(data => {
      this.data = data.data
      console.log(this.data)
    })
  }

}
