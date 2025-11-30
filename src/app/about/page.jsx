export default function About() {
    return (
      <div className='min-h-screen flex items-center justify-center'>
        <div className='max-w-2xl mx-auto p-3 text-center'>
          <div>
            <h1 className='text-3xl font font-semibold text-center my-7'>
              Nhatdev&apos; Blog
            </h1>
            <div className='text-md text-gray-500 flex flex-col gap-6'>
              <p>
                Chào mừng đến với Blog của Sahand! Được tạo bởi Nhatdev, blog này đóng vai trò là một nền tảng cá nhân để chia sẻ những hiểu biết sâu sắc và ý tưởng của anh ấy với thế giới. Nhatdev là một nhà phát triển đầy nhiệt huyết, người thích viết về công nghệ, lập trình (coding), và nhiều chủ đề liên quan khác.
              </p>
  
              <p>
               Trên blog này, bạn sẽ khám phá các bài viết và hướng dẫn hàng tuần bao gồm một loạt các chủ đề như phát triển web, kỹ thuật phần mềm và các ngôn ngữ lập trình. Sahand không ngừng học hỏi và khám phá các công nghệ mới, vì vậy hãy nhớ ghé thăm thường xuyên để cập nhật những thông tin mới nhất!
              </p>
  
              <p>
                Đây là website được tạo bởi NextJs và {' '}
                <a
                  href='https://go.clerk.com/fgJHKlt'
                  target='_blank'
                  className='text-teal-500 hover:underline'
                >
                  Clerk
                </a>
                .
              </p>
  
              <p>
                Chúng tôi mời bạn bình luận về các bài viết của chúng tôi và tương tác với những độc giả khác. Bạn cũng có thể thích (like) và trả lời (reply) các bình luận của người khác. Chúng tôi tin rằng một cộng đồng những người học hỏi có thể hỗ trợ sự phát triển và tiến bộ của nhau.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }