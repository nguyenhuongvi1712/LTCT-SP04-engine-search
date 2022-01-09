export interface Advertisement {
  id: number;
  createdAt: Date;
  updatedAt: Date;
  title: string;
  content: string;
  advertismentUrl: string;
  imageUrl: string;
  type: string;
  advertisingDisplayType: string;
  advertisementPosition: string;
  status: string;
  accessNumber: number;
  startAt: Date;
  endAt: Date;
}
