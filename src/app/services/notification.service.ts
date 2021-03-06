import { Injectable } from '@angular/core';
import { timer } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  public message: string | undefined;

  public info(notice: string) {
    this.message = notice;
    timer(2000).subscribe(() => this.message = undefined);
  }
}
