import { EventsService } from '../../shared/services/events.service';

export class BaseModal {

    public static readonly EVENT_ADD_ITEM = 'EVENT_ADD_ITEM';
    public static readonly EVENT_MODAL_CLOSE = 'EVENT_MODAL_CLOSE';
    
    public static STATE_OPENED = 1;
    public static STATE_CLOSED = 2;

    private _isModalOpen: boolean = false;
    public get isModalOpen(): boolean {
        return this._isModalOpen;
    }

    constructor(protected eventsService: EventsService) {
    }

    protected openModal = () => {
        this._isModalOpen = true;

        this.eventsService.onModalStateChanged.emit({
            state: BaseModal.STATE_OPENED
        });
    }
    protected closeModal = () => {
        this._isModalOpen = false;

        this.eventsService.onModalStateChanged.emit({
            state: BaseModal.STATE_CLOSED
        });
    }

}