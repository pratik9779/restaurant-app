import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ApiService } from '../shared/api.service';
import { Restaurant } from '../shared/restaurant.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  restaurants : any;
  constructor(private fb : FormBuilder, private apiService : ApiService) { }


  formValue !: FormGroup;

  ngOnInit(): void {
    this.formValue = this.fb.group({
      restaurantName:[''],
      email:[''],
      mobile:[''],
      address:[''],
      services:[''],
    })
    this.getRestaurants()
  }

    addRest(){
      const restaurantObj = new Restaurant(
        this.formValue.value.restaurantName,
        this.formValue.value.email,
        this.formValue.value.mobile,
        this.formValue.value.address,
        this.formValue.value.services
      )
      this.apiService.addRestaurant(restaurantObj).subscribe(res=>{
        console.log(res)
        this.getRestaurants()
        alert('added restaurant')
        this.formValue.reset()
      }, err=>{
        console.log(err)
        alert('error occur while adding restaurant')
      })
    }

    getRestaurants(){
      this.apiService.getRestaurant().subscribe(res => {
        this.restaurants = res;
      })
    }

    deleteRest(id: number){
      this.apiService.deleteRestaurant(id).subscribe(res => {
        console.log(res);
        this.getRestaurants()
        alert('restaurant deleted')
      }, err=>{
        console.log(err)
        alert('error occur while deleting restaurant')
      })
    }
}
