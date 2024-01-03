import { LightningElement, api, wire } from 'lwc';
import { publish, MessageContext } from 'lightning/messageService';

// if attempting to test the installed managed package, add namespace: timeline__TimelineRefreshData__c
import timelineRefreshData from '@salesforce/messageChannel/TimelineRefreshData__c';

export default class RefreshDataExample extends LightningElement {
    @api recordId;
    @api configId;

    @wire(MessageContext)
    messageContext;

    connectedCallback() {
        const { recordId, configId } = this;
        publish(this.messageContext, timelineRefreshData, { recordId, configId });
    }
}