import { faker } from "@faker-js/faker";
import { FakerFacade } from "./FakerFacade";
import { FakerCategory } from "../FakerCategory";

export class Music extends FakerFacade {

    public static genre(): string {
        return faker.music.genre();
    }

    public static songName(): string {
        return faker.music.songName();
    }

}

export const musicFakerCategory: FakerCategory[] = [
    {
        category: 'Music - Genre',
        desc: 'Genre',
        defaultFieldName: 'Genre',
        methodName: 'genre',
        class: Music
    },
    {
        category: 'Music - Song Name',
        desc: 'Song Name',
        defaultFieldName: 'Song Name',
        methodName: 'songName',
        class: Music
    }
]