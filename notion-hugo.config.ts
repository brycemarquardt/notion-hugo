import { UserConfig } from "./src/config"

const userConfig: UserConfig = {
    mount: {
        manual: false,
        page_url: 'https://www.notion.so/bmarquardt/Notion-DoIt-84897afe80bc475fa7a3c04b66cc9b4d?pvs=4',
        pages: [
            // {
            //     page_id: '<page_id>',
            //     target_folder: 'path/relative/to/content/folder'
            // }
            {
                page_id: '45eb121158b9489480ec000fd25c812b',
                target_folder: '.'
            }
        ],
        databases: [
            // {
            //     database_id: '<database_id>',
            //     target_folder: 'path/relative/to/content/folder'
            // }
            {
                database_id: 'b7b1816c05ec464391c8c111fa242985',
                target_folder: '.'
            }
        ],
    }
}

export default userConfig;
