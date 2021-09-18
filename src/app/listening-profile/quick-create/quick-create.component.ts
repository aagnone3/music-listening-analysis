import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { NGXLogger } from 'ngx-logger';

import { AuthenticationService } from './../../core/services/auth.service';
import { SpinnerService } from './../../core/services/spinner.service';
import { APIService, ListeningProfile } from '../../api.service';
import { NotificationService } from './../../core/services/notification.service';

@Component({
  selector: 'app-quick-create',
  templateUrl: './quick-create.component.html',
  styleUrls: ['./quick-create.component.css']
})
export class QuickCreateComponent implements OnInit {

  form: FormGroup;
  id: string;
  name: string;
  description: string;
  disableSubmit: boolean;

  constructor(private authService: AuthenticationService,
    private api: APIService,
    private logger: NGXLogger,
    private notificationService: NotificationService,
    private spinnerService: SpinnerService) {
  }

  ngOnInit() {
    this.form = new FormGroup({
      id: new FormControl('', Validators.required),
      name: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
    });

    this.form.get('id').valueChanges
      .subscribe(val => { this.name = val; });

    this.form.get('name').valueChanges
      .subscribe(val => { this.name = val; });

    this.form.get('description').valueChanges
      .subscribe(val => { this.description = val; });

    this.spinnerService.visibility.subscribe((value) => {
      this.disableSubmit = value;
    });
  }

  create(listeningProfile?: ListeningProfile) {

    this.api.CreateListeningProfile(listeningProfile)
      .then(event => {
        this.logger.info(`Created ${this.name}: ${this.description}`);
        this.form.reset();
        this.notificationService.openSnackBar('Listening profile created.');
      })
      .catch(error => {
        this.logger.error('Error creating listening profile', error);
        this.notificationService.openSnackBar(error.error);
      })

  }

}
