import { IArt } from "@/app/api/arts/ArtModel";

export interface IART {
    "titleId": string,
    "titleName": string,
    "arts": IArt[]
}