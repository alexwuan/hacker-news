export interface Article {
    content: string;
    coverImageUrl?: string;
    description: Description | string;
    subtitle: string;
    title: string;
    url: string;
}

export interface Description {
    point: string;
    actionDate: string;
    noOfComment: string;
}
