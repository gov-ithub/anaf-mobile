import { NotificationList } from './../../models';

/**
 * Interface for Notify Services
 * 
 * @export
 * @interface INotify
 */
export interface INotify {
  /**
    * Add Event with no schedule
    * @param title event title
    */
  add(title: string): Promise<boolean>;

  /**
    * Schedule event
    * @param title event title
    * @param startDate start date for event
    */
  schedule(title: string, startDate: Date): Promise<boolean>;

  getList(): Promise<NotificationList>;
}