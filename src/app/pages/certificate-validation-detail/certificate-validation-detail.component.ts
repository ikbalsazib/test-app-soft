import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { Subscription } from 'rxjs';
import { Certificate } from 'src/app/interfaces/common/certificate.interface';
import { CertificateService } from 'src/app/services/common/certificate.service';

@Component({
  selector: 'app-certificate-validation-detail',
  templateUrl: './certificate-validation-detail.component.html',
  styleUrls: ['./certificate-validation-detail.component.scss']
})
export class CertificateValidationDetailComponent implements OnInit {
  // Store Data
  id?: string;
  certificate?: Certificate;
  isLoading: boolean = true;
  // Subscriptions
  private subDataOne: Subscription;
  private subRouteOne: Subscription;
  constructor(
    private activatedRoute: ActivatedRoute,
    private certificateService: CertificateService,
    private spinnerService: NgxSpinnerService,
  ) { }

  ngOnInit(): void {
    // GET ID FORM PARAM
    this.activatedRoute.paramMap.subscribe((param) => {
      this.id = param.get('id');
      console.warn(this.id)
      if (this.id) {
        this.validateCertificateById(this.id);
      }
    });
  }


  /**
 * HTTP REQ HANDLE
 * getCourseById()
 * getDiscountCourses()
 */

  private validateCertificateById(id) {
    const data={
      certificateNumber:id
    }
    // this.spinnerService.show();
    this.subDataOne = this.certificateService.validateCertificateById(data)
      .subscribe(res => {
        this.isLoading = false;
        this.spinnerService.hide();
        this.certificate = res.data;

        console.log('sep Course', this.certificate)
      }, error => {
        this.isLoading = false;
        this.spinnerService.hide();
        console.log(error);
      });
  }

}
