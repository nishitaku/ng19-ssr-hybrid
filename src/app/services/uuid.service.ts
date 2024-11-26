import { HttpClient } from '@angular/common/http';
import { inject, Injectable, Signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';

@Injectable({
  providedIn: 'root',
})
export class UuidService {
  private readonly http = inject(HttpClient);

  fetchUuid(): Signal<string> {
    return toSignal(
      this.http.get<string>(
        'https://www.uuidtools.com/api/generate/v4/count/1'
      ),
      { initialValue: '' }
    );
  }
}
