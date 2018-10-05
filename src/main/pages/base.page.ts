import { Subject } from 'rxjs';

export class BasePage implements OnDestroy {
    protected unsub: Subject<void> = new Subject();

    ngOnDestroy() {
        this.unsub.next();
        this.unsub.complete();
    }
}
