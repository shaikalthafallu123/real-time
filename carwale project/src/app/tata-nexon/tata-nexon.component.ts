import { Component, OnInit } from '@angular/core';
import { CusDetailService } from '../input-field/cusDetails.service';

@Component({
  selector: 'app-tata-nexon',
  templateUrl: './tata-nexon.component.html',
  styleUrls: ['./tata-nexon.component.scss']
})
export class TataNexonComponent implements OnInit {
 public customers :string="";
  constructor(public cusDetails:CusDetailService) { }

  ngOnInit(): void {
  }
opencusDetails(){
this.customers = "block"  
}
}
