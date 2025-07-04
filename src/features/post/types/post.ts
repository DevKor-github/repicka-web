export interface PostPayload {
    item: {
      productTypes: string[];
      size: string;
      color: string;
      quality: string;
      title: string;
      description: string;
      location: string;
      tradeMethod: 'DIRECT' | 'DELIVERY';
      canDeal: boolean;
    };
    postTypes: ('RENTAL' | 'SALE')[];
    rentalFee: number;
    salePrice: number;
    deposit: number;
    images: string[];
  }
  