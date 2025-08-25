export type NativeMessageType = 'FCM_TOKEN';

export interface NativeMessage<T> {
  type: NativeMessageType;
  payload: T;
}
