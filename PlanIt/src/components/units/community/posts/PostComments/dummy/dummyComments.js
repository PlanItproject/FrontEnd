import profileImage from '../../../../../../assets/profile.png';

export const dummyComments = [
    {
      id: 1,
      user: {
        id: 101,
        name: 'John Doe',
        profileImage: profileImage,
      },
      content: '더미 댓글입니다. React를 사용하여 UI로 구성하는 중입니다!',
      isPostAuthor: true,
      likeCount: 5,
      createdAt: '25.11.11',
      replies: [
        {
          id: 1011,
          user: {id: 201, name: 'Alice', profileImage: profileImage},
          content: "대댓글 테스트 입니다.",
          mentionUser: null,
          isPostAuthor: false,
          likeCount: 0,
          createdAt: '25.11.11'
        },
        {
          id: 1012,
          user: { id: 101, name: 'John Doe', profileImage: profileImage},
          mentionUser: "Alice", // 🔥 작성자가 남긴 대댓글
          content: "멘션 테스트 입니다.",
          isPostAuthor: true,
          likeCount: 0,
          createdAt: '25.11.11',
        },
        {
          id: 1013,
          user: {id: 201, name: 'Alice', profileImage: profileImage},
          content: '작품만 문화다, 팝니다 나아 너무 하여. 투표일의 반대는 지니는 있어 것 할까 된 국어의 못하는 이것을 깨진다. 확산을 애의 지적이 내용 소설 한과 힘쓰는 쌓아 하다.',
          mentionUser: 'Jhon Doe',
          isPostAuthor: false,
          likeCount: 0,
          createdAt: '25.11.11'
        },
      ]
    },
    
    {
      id: 2,
      user: {
        id: 102,
        name: 'Jane Smith',
        profileImage: profileImage,
      },
      content: '작품만 문화다, 팝니다 나아 너무 하여. 투표일의 반대는 지니는 있어 것 할까 된 국어의 못하는 이것을 깨진다. 확산을 애의 지적이 내용 소설 한과 힘쓰는 쌓아 하다. 작품만 문화다, 팝니다 나아 너무 하여. 투표일의 반대는 지니는 있어 것 할까 된 국어의 못하는 이것을 깨진다. 확산을 애의 지적이 내용 소설 한과 힘쓰는 쌓아 하다.',
      isPostAuthor: false,
      likeCount: 2,
      createdAt: '25.11.11',
      replies:[],
    },
];
  