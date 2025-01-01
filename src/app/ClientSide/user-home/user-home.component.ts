import { Component, OnInit } from '@angular/core';
import { AdminSupplierServiceService } from '../../admin-side/Admin-Service/admin-supplier-service.service';
import { AdminServiceService } from '../../admin-side/Admin-Service/admin-service.service';
import { Store } from '@ngrx/store';
import {AddSupplierPageSettings,UpdateSupplierPageSettings} from '../../State/action/Pagesetting.action'
import { customerPageNames} from '../../Shared/Enums/CustomerPageNames.Enum'
@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.component.html',
  styleUrl: './user-home.component.css'
})
export class UserHomeComponent implements OnInit {
  Title : string | undefined;
  TreandingTitle="Trending Products"
  Filter : string | undefined;
  FilterData:any[]=[];
  allSuppplierPageData:any[]=[];
 pageConfigresult:any;
  allCustomerPagedata:any[]=[];
  constructor(private AdminSupplierservie:AdminSupplierServiceService,private Adminservice:AdminServiceService,private store:Store){}
  ngOnInit(): void {
      this.AdminSupplierservie.getAllsupplierPage().subscribe((res:any) =>{
        this.allSuppplierPageData.push(res.data);
        console.log(this.allSuppplierPageData);
      })
      this.Adminservice.getAllCustomerPageSetting().subscribe((res:any) =>{
        this.allCustomerPagedata.push(res.data);
        this.store.dispatch(AddSupplierPageSettings({pageName: customerPageNames.Home,editConfig: false,deleteConfig:false}));     
      })
  }
}
