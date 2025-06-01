const dummyPostsContents = [
    {
        id: 'post-1',
        title: '오늘의 새로운 여행지, 제주도!',
        content: '오늘은 제주도에서 멋진 하루를 보냈습니다. 바다를 보며 맛있는 음식을 먹고, 힐링한 하루였습니다. 분주한 도시를 벗어나 잠시 쉬어가며 상쾌한 공기를 마시며 짧은 산책을 다녀왔습니다. 자연 속에서 새로운 색감과 패턴을 발견하곤 하죠. 돌아와서 따뜻한 커피 한 잔과 함께 스케치북에 떠오르는 생각들을 자유롭게 그려봅니다. 여행은 일상에 에너지를 불어넣어주고 놀라운 아이디어들이 탄생하곤 해요. 그래서 여행은 언제나 즐거운 것 같습니다. 다음 번에는 또 어떤 숨은 명소를 찾아볼지 기대해주세요!',
        createdAt: '25.11.11',
        address: '제주특별자치도 제주시 한림읍 110-10',
        city: '제주도',
        country: '한국',
        user: {
            name: 'traveler_jane',
            profileImage: 'https://img.freepik.com/free-photo/back-view-woman-forest_23-2148218413.jpg?t=st=1741101131~exp=1741104731~hmac=10d6098028c7f6a9a2fe1f4784be1ad2fb90db6f78d9e044bd7334b67c7dd1de&w=1800',
        },
        images: [
            { id: 'img-1' , src: 'https://img.freepik.com/free-photo/selective-focus-waving-flags-sea-selective-focus-blurred-sky-beauty-nature-landscape-black-sea-coast-horizontal-photo_166373-1506.jpg?t=st=1741148114~exp=1741151714~hmac=1cf41501d4ecf31e98f4172926da03fd6a7bd0c0327a9c52c0568019d6eb79c7&w=1800', alt: '제주풍경' },
            { id: 'img-2', src: 'https://img.freepik.com/free-photo/downtown-restaurant-shopfront_53876-75135.jpg?t=st=1741149612~exp=1741153212~hmac=042dc35245e6295e05e7a806e6b2040dcb3f11bbaffa0645bc613aaef4c40732&w=1480', alt: '제주카페전경' },
            { id: 'img-3', src: 'https://img.freepik.com/free-photo/vertical-shot-sunflowers-field-with-mountain_181624-31131.jpg?t=st=1741148334~exp=1741151934~hmac=235db22679da567f33b7f3521b5e06281990581364306a79c854b35c3e92f990&w=740', alt: '제주풍경2' },
            { id: 'img-4', src: 'https://img.freepik.com/free-photo/beautiful-girl-walking-purple-flower-tunnel-chiang-rai-thailand_335224-1129.jpg?t=st=1741148382~exp=1741151982~hmac=60b2972ba9e23c28f368cc9d43fe134bed42ba5a532734fe44b94ca24a164767&w=2000', alt: '제주도에서' }
        ]
    },
    {
        id: 'post-2',
        title: '오늘의 새로운 여행지, 전주!',
        content: '오늘은 전주에서 멋진 하루를 보냈습니다. 한옥을 보며 맛있는 음식을 먹고, 힐링한 하루였습니다. 분주한 도시를 벗어나 잠시 쉬어가며 상쾌한 공기를 마시며 짧은 산책을 다녀왔습니다. 전통 속에서 아름다운 패턴을 발견하곤 하죠. 돌아와서 따뜻한 커피 한 잔과 함께 스케치북에 떠오르는 생각들을 자유롭게 그려봅니다. 여행은 일상에 에너지를 불어넣어주고 놀라운 아이디어들이 탄생하곤 해요. 그래서 여행은 언제나 즐거운 것 같습니다. 다음 번에는 또 어떤 숨은 명소를 찾아볼지 기대해주세요!',
        createdAt: '25.11.12',
        address: '전라북도 전주시 평화로 110-10',
        city: '전주',
        country: '한국',
        user: {
            name: 'looloolala',
            profileImage: 'https://img.freepik.com/free-photo/back-view-woman-forest_23-2148218413.jpg?t=st=1741101131~exp=1741104731~hmac=10d6098028c7f6a9a2fe1f4784be1ad2fb90db6f78d9e044bd7334b67c7dd1de&w=1800',
        },
        images: [
            { id: 'img-1' , src: 'https://img.freepik.com/free-photo/selective-focus-waving-flags-sea-selective-focus-blurred-sky-beauty-nature-landscape-black-sea-coast-horizontal-photo_166373-1506.jpg?t=st=1741148114~exp=1741151714~hmac=1cf41501d4ecf31e98f4172926da03fd6a7bd0c0327a9c52c0568019d6eb79c7&w=1800', alt: '제주풍경' },
            { id: 'img-2', src: 'https://img.freepik.com/free-photo/downtown-restaurant-shopfront_53876-75135.jpg?t=st=1741149612~exp=1741153212~hmac=042dc35245e6295e05e7a806e6b2040dcb3f11bbaffa0645bc613aaef4c40732&w=1480', alt: '제주카페전경' },
            { id: 'img-3', src: 'https://img.freepik.com/free-photo/vertical-shot-sunflowers-field-with-mountain_181624-31131.jpg?t=st=1741148334~exp=1741151934~hmac=235db22679da567f33b7f3521b5e06281990581364306a79c854b35c3e92f990&w=740', alt: '제주풍경2' },
            { id: 'img-4', src: 'https://img.freepik.com/free-photo/beautiful-girl-walking-purple-flower-tunnel-chiang-rai-thailand_335224-1129.jpg?t=st=1741148382~exp=1741151982~hmac=60b2972ba9e23c28f368cc9d43fe134bed42ba5a532734fe44b94ca24a164767&w=2000', alt: '제주도에서' }
        ]
    }
];

export default dummyPostsContents;