import { Component } from '@angular/core';
import { InventoryService } from '../SupplierServices/inventory.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { ProductService } from '../SupplierServices/product.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add-inventory',
  templateUrl: './add-inventory.component.html',
  styleUrl: './add-inventory.component.css'
})
export class AddInventoryComponent {
  ProductData: any;
  InventoryData!: FormGroup;

  constructor(
    private frombuilder: FormBuilder,
    private inventoryservice: InventoryService,
    private Productservice: ProductService,
    private dialogRef: MatDialogRef<AddInventoryComponent>,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.Productservice.GetAllProducts().subscribe((res: any) => {
      if (res != null) {
        this.ProductData = res;
      }
    });

    this.InventoryData = this.frombuilder.group({
      product_id: [0, Validators.required],
      WarehouseName: ['', Validators.required],
      Location: ['', Validators.required],
      Quantity: ['', Validators.required]
    });
  }

  AddInventory() {
    if (this.InventoryData.valid) {
      var inventoryData = this.InventoryData.getRawValue();
      this.inventoryservice.AddInventory(inventoryData).subscribe(res => {
        if (res != null) {
          this.toastr.success("Inventory added successfully");
        }
      });
    }
  }

  CloseAddInventoryDailog() {
    this.dialogRef.close();
  }
}
