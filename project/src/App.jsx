import "./App.css";
export default function App(){
    return(
        <div>
            <header className="header">
                <h1>My Profile</h1>
                <p>나만의 웹사이트를 만들어봐요!</p>
            </header>

            <nav className="nav">
                <ul>
                    <li><a href="#about">자기소개</a></li>
                    <li><a href="#features">관심사</a></li>
                    <li><a href="#resolution">올해 다짐</a></li>
                    <li><a href="#contact">연락하기</a></li>
                    <li><a href="https://skulikelion.com" target="_blank">멋사 사이트 바로가기</a></li>
                </ul>
            </nav>

            <main className="main">
                <section id="about" className="section">
                    <h2>안녕하세요!!</h2>
                    <p>만나서 반갑습니다. 저는 소프트웨어학과 김규리입니다.</p>
                    <p>서경대학교 3학년으로 진학 중입니다.</p>
                    <p>함께 즐거운 동아리 생활 보내봐요 ^^</p>
                    <img className="img" src="https://img1.daumcdn.net/thumb/R1280x0/?fname=http://t1.daumcdn.net/brunch/service/user/eViY/image/is3UFbmo7Gwuiln43EznmVZFwXo.jpg" alt="about_image"/>
                </section>

                <section id="features" className="section">
                    <h2>관심사</h2>
            
                    <h3>취미</h3>
                    <ul>
                        <li>드라마 보기</li>
                        <li>음악 감상</li>
                        <li>유튜브 보기</li>
                        <li>과제하기..</li>
                        <li>멍때리기</li>
                    </ul>
                    <img className="img" src="https://i.ytimg.com/vi/dIt_N7yNTgk/mqdefault.jpg" alt="guitar_image"/>

                    <h3>좋아하는 음식 순위</h3>
                    <ol>
                        <li>미역국</li>
                        <li>떡볶이</li>
                        <li>닭갈비</li>
                    </ol>

                </section>

                <section id="resolution" className="section">
                    <h2>올해 다짐</h2>
                    <h3>멋쟁이사자처럼 동아리에서의 다짐</h3>
                    <p>올해는 제 첫 번째 동아리 활동인 멋쟁이사자처럼에서 많은 것을 배우고 성장하는 한 해로 만들겠습니다.</p>
                    <p>프론트엔드 분야에서 실력을 쌓고, 협업 경험을 통해 팀워크를 익히며, 주어진 프로젝트를 책임감 있게 완수하는 것이 목표입니다.</p>
                    <p>처음 해보는 도전이라 긴장도 되지만, 배움의 과정 자체를 즐기면서 적극적으로 참여하겠습니다!</p>
                    <p>혼자 공부하는 것과는 다른 협업의 가치를 깨닫고, 동아리 활동이 끝날 때쯤 한층 성장한 자신을 만날 수 있도록 최선을 다하겠습니다.</p>
                    <p>🔥 성장과 도전! 올해는 내가 프론트엔드 개발자로 한 걸음 더 나아가는 해! 🔥</p>
                </section>

                <section id="contact" className="section">
                    <h2>연락하기</h2>
                    <p>이메일: skulikelion@example.com</p>
                    <p>전화번호: 010-1234-5678</p>
                </section>
            </main>

            <footer className="footer">
                <p>© 2025. SKU LIKELION. All rights reserved.</p>
            </footer>
        </div>
        
    )
}


    
