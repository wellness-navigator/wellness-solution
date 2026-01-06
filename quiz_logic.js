const questions = [
    // --- 1. 체형 및 외모 (Body Shape & Appearance) ---
    {
        id: 1,
        text: "당신의 체격과 근육 발달 정도는 어떤가요?",
        options: [
            { text: "체격이 크고 근육보다 살이 찌기 쉬운 편이다.", scores: { mokyang: 3, mokeum: 3, to: 1 } }, // mokeum 2 -> 3
            { text: "상체가 발달했고, 하체는 상대적으로 약하다.", scores: { to: 3, geum: 2 } },
            { text: "허리가 가늘고 균형 잡혀 있으며, 마른 편이다.", scores: { su: 3, geum: 1 } },
            { text: "전체적으로 골격이 크지 않고 단단해 보인다.", scores: { su: 2, mokeum: 1.5 } } // mokeum 1 -> 1.5
        ]
    },
    {
        id: 2,
        text: "땀을 흘릴 때의 컨디션 변화는?",
        options: [
            { text: "땀을 흘리면 몸이 개운하고 가볍다.", scores: { mokyang: 4, mokeum: 4.5, to: 1 } }, // mokeum 3 -> 4.5
            { text: "평소 땀이 별로 없거나, 흘려도 큰 변화 없다.", scores: { to: 1, geum: 1 } },
            { text: "땀을 흘리면 기운이 빠지고 쉽게 지친다.", scores: { su: 4, geum: 2 } },
            { text: "잠잘 때 식은땀이 나면 몸이 안 좋다.", scores: { su: 3 } }
        ]
    },

    // --- 2. 식습관 및 소화 (Diet & Digestion) ---
    {
        id: 3,
        text: "육식(소고기, 닭고기 등)을 먹었을 때 반응은?",
        options: [
            { text: "소화가 아주 잘 되고 힘이 난다.", scores: { mokyang: 4, mokeum: 6, to: 2 } }, // mokeum 4 -> 6
            { text: "가끔 먹으면 좋지만, 과하면 속이 불편하다.", scores: { su: 2, to: 2 } },
            { text: "고기를 먹으면 속이 더부룩하고 변이 묽어진다.", scores: { geumyang: 4, geumeum: 6 } }, // geumeum 4 -> 6
            { text: "별다른 영향 없이 무난하다.", scores: { su: 1 } }
        ]
    },
    {
        id: 4,
        text: "해산물(생선, 조개류)을 먹었을 때 반응은?",
        options: [
            { text: "매우 편안하고 소화가 잘 된다.", scores: { geumyang: 4, geumeum: 6, to: 2 } }, // geumeum 4 -> 6
            { text: "좋아하지만 가끔 비린내가 역하게 느껴진다.", scores: { su: 2 } },
            { text: "생선이나 조개를 먹으면 알러지가 생기거나 소화가 안 된다.", scores: { mokyang: 4, mokeum: 4.5 } }, // mokeum 3 -> 4.5
            { text: "회보다는 익혀 먹는 것이 편하다.", scores: { su: 3, mokyang: 1 } }
        ]
    },
    {
        id: 5,
        text: "찬 음식(냉면, 얼음물, 참외 등)을 먹으면?",
        options: [
            { text: "시원하고 속이 뻥 뚫리는 기분이다.", scores: { to: 4, geum: 2, mokyang: 1 } },
            { text: "별 상관없다.", scores: { mokyang: 1, to: 1 } },
            { text: "배가 아프거나 설사를 하기도 한다.", scores: { su: 4, mokeum: 4.5 } }, // mokeum 3 -> 4.5
            { text: "소화가 안 되어 따뜻한 것만 찾게 된다.", scores: { su: 4, mokeum: 3 } } // mokeum 2 -> 3
        ]
    },
    {
        id: 6,
        text: "밀가루 음식(빵, 국수)에 대한 반응은?",
        options: [
            { text: "소화가 잘 되고 즐겨 먹는다.", scores: { mokyang: 3, mokeum: 4.5, to: 2 } }, // mokeum 3 -> 4.5
            { text: "먹고 나면 속이 더부룩하고 가스가 찬다.", scores: { su: 3, geum: 2 } },
            { text: "피부 트러블이 잘 생긴다.", scores: { geum: 3, to: 1 } },
            { text: "크게 불편함 없다.", scores: { mokyang: 1 } }
        ]
    },
    {
        id: 7,
        text: "매운 음식을 먹었을 때는 어떤가요?",
        options: [
            { text: "스트레스가 풀리고 소화가 잘 된다.", scores: { su: 3, mokyang: 2 } },
            { text: "설사를 하거나 속이 쓰리다.", scores: { to: 4, geum: 2 } },
            { text: "땀이 너무 많이 나서 힘들다.", scores: { to: 2, mokyang: 1 } },
            { text: "적당히 즐기는 편이다.", scores: { mokeum: 1.5 } } // mokeum 1 -> 1.5
        ]
    },
    {
        id: 8,
        text: "식사 속도는 어떤 편인가요?",
        options: [
            { text: "매우 빠르다. 식탐이 조금 있는 편이다.", scores: { to: 4, mokyang: 2 } },
            { text: "보통이다.", scores: { mokeum: 1.5, geum: 1 } }, // mokeum 1 -> 1.5
            { text: "천천히 먹는 편이다.", scores: { su: 2, geumeum: 3 } }, // geumeum 2 -> 3
            { text: "소화가 안 돼서 아주 천천히 꼭꼭 씹어 먹는다.", scores: { su: 4 } }
        ]
    },

    // --- 3. 병리 및 민감도 (Pathology & Sensitivity) ---
    {
        id: 9,
        text: "약물(항생제, 진통제)에 대한 부작용 경험이 있나요?",
        options: [
            { text: "거의 없다. 약발이 잘 받는다.", scores: { mokyang: 2, mokeum: 3 } }, // mokeum 2 -> 3
            { text: "가끔 속이 쓰리다.", scores: { su: 1 } },
            { text: "약 부작용이 심해 한약이나 자연요법을 선호한다.", scores: { toeum: 7.5, geumyang: 3 } }, // toeum 5 -> 7.5
            { text: "특별히 모르겠다.", scores: { to: 1 } }
        ]
    },
    {
        id: 10,
        text: "커피를 마시면 어떤가요?",
        options: [
            { text: "피로가 풀리고 집중이 잘 된다.", scores: { mokyang: 2, mokeum: 3, to: 2 } }, // mokeum 2 -> 3
            { text: "가슴이 두근거리고 잠이 안 온다.", scores: { geum: 3, toeum: 4.5 } }, // toeum 3 -> 4.5
            { text: "속이 쓰리다.", scores: { su: 2 } },
            { text: "하루 3잔 이상 마셔도 괜찮다.", scores: { mokyang: 3, to: 1 } }
        ]
    },
    {
        id: 11,
        text: "사우나나 뜨거운 목욕을 좋아하시나요?",
        options: [
            { text: "아주 좋아한다. 땀 빼면 개운하다.", scores: { mokyang: 4, mokeum: 4.5 } }, // mokeum 3 -> 4.5
            { text: "답답해서 오래 못 있는다.", scores: { to: 2, geum: 2 } },
            { text: "하고 나면 어지럽고 기운이 빠진다.", scores: { su: 4, geum: 3 } },
            { text: "따뜻한 물에 반신욕 정도가 좋다.", scores: { su: 2 } }
        ]
    },

    // --- 4. 성격 및 기질 (Personality) ---
    {
        id: 12,
        text: "당신의 성격 스타일은?",
        options: [
            { text: "느긋하고 과묵하며, 둥글둥글다.", scores: { mokyang: 3 } },
            { text: "급하고 활달하며, 뒤끝이 없다.", scores: { to: 4 } },
            { text: "섬세하고 꼼꼼하며, 의심이 많다.", scores: { su: 4, geumeum: 3 } }, // geumeum 2 -> 3
            { text: "직관적이고 창의적이나, 비현실적일 때가 있다.", scores: { geumyang: 3 } }
        ]
    },
    {
        id: 13,
        text: "화가 났을 때의 반응은?",
        options: [
            { text: "참다가 한 번에 폭발한다.", scores: { mokyang: 2, su: 2 } },
            { text: "바로바로 표현하고 금방 잊는다.", scores: { to: 4, mokeum: 3 } }, // mokeum 2 -> 3
            { text: "화를 내면 몸이 아플 정도로 타격을 입는다.", scores: { geumeum: 6 } }, // geumeum 4 -> 6
            { text: "논리적으로 따지고 든다.", scores: { geum: 2, su: 1 } }
        ]
    },
    {
        id: 14,
        text: "말하기를 좋아하나요?",
        options: [
            { text: "말하는 것을 좋아하고 목소리가 톤이 높다.", scores: { to: 3, mokeum: 4.5 } }, // mokeum 3 -> 4.5
            { text: "말하기보다는 듣는 편이다.", scores: { mokyang: 2, su: 2 } },
            { text: "말을 많이 하면 피곤하다.", scores: { geum: 2, su: 3 } },
            { text: "논쟁하는 것을 즐긴다.", scores: { geumeum: 4.5 } } // geumeum 3 -> 4.5
        ]
    },

    // --- 5. 수면 및 기타 (Sleep & Others) ---
    {
        id: 15,
        text: "잠귀가 밝은 편인가요?",
        options: [
            { text: "매우 예민해서 작은 소리에도 깬다.", scores: { su: 3, geum: 2 } },
            { text: "한번 잠들면 업어가도 모른다.", scores: { mokyang: 4, to: 2 } },
            { text: "꿈을 자주 꾸는 편이다.", scores: { mokeum: 3 } }, // mokeum 2 -> 3
            { text: "잠자리가 바뀌면 잘 못 잔다.", scores: { su: 3 } }
        ]
    },
    {
        id: 16,
        text: "피부 상태는 어떤가요?",
        options: [
            { text: "희고 부드러우나 알레르기/아토피가 잦다.", scores: { geum: 4 } },
            { text: "땀구멍이 크고 칙칙한 편이다.", scores: { mokyang: 2 } },
            { text: "건조하고 얇은 편이다.", scores: { to: 2, su: 1 } },
            { text: "특별한 트러블 없이 건강하다.", scores: { su: 1, mokeum: 1.5 } } // mokeum 1 -> 1.5
        ]
    },
    {
        id: 17,
        text: "오른쪽 배(간 부위)가 불편한 적이 있나요?",
        options: [
            { text: "자주 뻐근하거나 불편하다.", scores: { geumyang: 3, geumeum: 4.5 } }, // geumeum 3 -> 4.5
            { text: "술을 마셔도 간은 튼튼한 것 같다.", scores: { mokyang: 3, mokeum: 4.5 } }, // mokeum 3 -> 4.5
            { text: "전혀 모르겠다.", scores: { to: 1, su: 1 } },
            { text: "스트레스 받으면 옆구리가 결린다.", scores: { mokeum: 3 } } // mokeum 2 -> 3
        ]
    },
    {
        id: 18,
        text: "평소 물을 마시는 습관은?",
        options: [
            { text: "물을 잘 안 마신다. 갈증을 별로 안 느낀다.", scores: { su: 3, mokyang: 1 } },
            { text: "시원한 물을 벌컥벌컥 자주 마신다.", scores: { to: 4, geum: 2 } },
            { text: "따뜻한 차를 즐겨 마신다.", scores: { su: 3 } },
            { text: "식사 도중 물을 많이 마신다.", scores: { mokeum: 3 } } // mokeum 2 -> 3
        ]
    },
    {
        id: 19,
        text: "가장 자주 앓는 증상은?",
        options: [
            { text: "소화불량, 위염, 속쓰림.", scores: { su: 3, mokeum: 3 } }, // mokeum 2 -> 3
            { text: "아토피, 비염, 피부질환.", scores: { geum: 4 } },
            { text: "요통, 관절통.", scores: { mokyang: 2 } },
            { text: "두통, 어지럼증.", scores: { toeum: 3 } } // toeum 2 -> 3
        ]
    },
    {
        id: 20,
        text: "새로운 환경에 적응하는 능력은?",
        options: [
            { text: "빠르게 적응하고 사람들과 금방 친해진다.", scores: { to: 4, mokeum: 4.5 } }, // mokeum 3 -> 4.5
            { text: "시간이 걸리지만 한번 적응하면 꾸준하다.", scores: { mokyang: 3 } },
            { text: "낯을 가리고 혼자 있는 것이 편하다.", scores: { su: 3, geum: 2 } },
            { text: "주도적으로 분위기를 이끈다.", scores: { geumeum: 4.5 } } // geumeum 3 -> 4.5
        ]
    },
    // --- 6. 추가 질문 (음체질 보강) ---
    {
        id: 21,
        text: "평소 추위를 많이 타거나 손발이 차가운 편인가요?",
        options: [
            { text: "매우 그렇다. 겨울이 힘들다.", scores: { sueum: 6, geumeum: 4 } },
            { text: "가끔 그렇지만 견딜만하다.", scores: { sueum: 3, mokeum: 2 } },
            { text: "추위보다는 더위를 많이 탄다.", scores: { toyang: 2, mokyang: 2 } },
            { text: "특별히 추위나 더위를 타지 않는다.", scores: { mokyang: 1 } }
        ]
    },
    {
        id: 22,
        text: "지치고 힘들 때 에너지를 회복하는 방법은?",
        options: [
            { text: "집에서 혼자 조용히 쉬는 것이 최고다.", scores: { sueum: 5, mokeum: 4, geumeum: 3 } },
            { text: "친한 친구 한두 명과 깊은 대화를 나눈다.", scores: { geumeum: 3, sueum: 2 } },
            { text: "사람들을 만나 왁자지껄하게 놀아야 풀린다.", scores: { toyang: 4, mokyang: 3 } },
            { text: "운동을 하거나 몸을 움직여 땀을 낸다.", scores: { mokyang: 3, mokeum: 2 } } // mokeum maintained 2 as base
        ]
    },
    {
        id: 23,
        text: "신경을 쓰거나 스트레스를 받으면 소화가 안 되나요?",
        options: [
            { text: "자주 체하거나 명치가 답답해진다.", scores: { sueum: 5, geumeum: 5 } },
            { text: "입맛이 뚝 떨어진다.", scores: { toeum: 4, geumyang: 3 } },
            { text: "오히려 먹는 것으로 스트레스를 푼다.", scores: { mokyang: 4, toyang: 3 } },
            { text: "스트레스와 소화는 별 상관이 없다.", scores: { mokyang: 2 } }
        ]
    }
];

// --- 점수 집계 객체 ---
let scores = {
    mokyang: 0,
    mokeum: 0,
    toyang: 0,
    toeum: 0, // Rare
    geumyang: 0,
    geumeum: 0,
    suyang: 0,
    sueum: 0
};

// 매핑: 단축키 -> 실제 ID
const keyMap = {
    'mokyang': 'mokyang', 'mok': 'mokyang',
    'mokeum': 'mokeum',
    'toyang': 'toyang', 'to': 'toyang',
    'toeum': 'toeum',
    'geumyang': 'geumyang', 'geum': 'geumyang',
    'geumeum': 'geumeum',
    'suyang': 'suyang', 'su': 'suyang',
    'sueum': 'sueum'
};

// 체질 표시 이름
const constitutionNames = {
    mokyang: '목양체질', mokeum: '목음체질',
    toyang: '토양체질', toeum: '토음체질',
    geumyang: '금양체질', geumeum: '금음체질',
    suyang: '수양체질', sueum: '수음체질'
};

let currentQuestionIndex = 0;
// 검증 단계 상태: 'NONE' | 'ASK_KNOW' | 'ASK_WHICH'
let verificationState = 'NONE';

// 문제 로드
function loadQuestion() {
    // 모든 일반 질문이 끝났을 때
    if (currentQuestionIndex >= questions.length) {
        if (verificationState === 'NONE') {
            verificationState = 'ASK_KNOW';
            renderParentKnowQuestion();
            return;
        } else if (verificationState === 'ASK_KNOW') {
            // 이미 렌더링됨
            return;
        } else if (verificationState === 'ASK_WHICH') {
            // 이미 렌더링됨
            return;
        }
        // 검증 완료 후 finishTest 호출은 handleParent... 함수에서 담당
        return;
    }

    const q = questions[currentQuestionIndex];
    if (!q) {
        // Fallback
        finishTest();
        return;
    }

    const container = document.getElementById("question-container");
    container.innerHTML = `
        <div class="question-card fade-in">
            <div class="question-number">Q${q.id}</div>
            <div class="question-text">${q.text}</div>
            <div class="options-grid">
                ${q.options.map((opt, idx) => `
                    <button class="option-btn" onclick="selectOption(${currentQuestionIndex}, ${idx})">
                        ${opt.text}
                    </button>
                `).join('')}
            </div>
        </div>
    `;

    // 프로그레스 바 업데이트
    updateProgressBar();
}

function selectOption(qIdx, oIdx) {
    const q = questions[qIdx];
    const selected = q.options[oIdx];

    // 점수 합산
    for (const [key, value] of Object.entries(selected.scores)) {
        // keyMap을 통해 mok -> mokyang 등으로 변환
        const realKey = keyMap[key] || keyMap['mokyang']; // fallback

        if (realKey === 'to') { // 'to' affects both Toyang and Toeum (mostly Toyang)
            scores.toyang += value;
            scores.toeum += value * 0.5;
        } else if (realKey === 'geum') { // 'geum' affects both 
            scores.geumyang += value;
            scores.geumeum += value;
        } else if (realKey === 'su') {
            scores.suyang += value;
            scores.sueum += value;
        } else if (realKey === 'mok') { // Just in case
            scores.mokyang += value;
            scores.mokeum += value;
        } else {
            // Specific keys: mokyang, mokeum, geumeum, etc.
            if (scores[realKey] !== undefined) {
                scores[realKey] += value;
            }
        }
    }

    currentQuestionIndex++;
    loadQuestion();
}

function renderParentKnowQuestion() {
    const container = document.getElementById("question-container");
    container.innerHTML = `
        <div class="question-card fade-in">
            <div class="question-number">추가 검증</div>
            <div class="question-text">부모님의 체질을 정확히 알고 계신가요?</div>
            <div class="options-grid">
                <button class="option-btn" onclick="handleParentKnow(true)">
                    예, 알고 있습니다.
                </button>
                <button class="option-btn" onclick="handleParentKnow(false)">
                    아니오, 잘 모릅니다.
                </button>
            </div>
        </div>
    `;
    updateProgressBar();
}

function handleParentKnow(knows) {
    if (knows) {
        verificationState = 'ASK_WHICH';
        renderParentSelectQuestion();
    } else {
        finishTest();
    }
}

function renderParentSelectQuestion() {
    // 현재 점수 기준 상위 4개 추출
    let scoreArray = [];
    for (const [key, val] of Object.entries(scores)) {
        scoreArray.push({ id: key, score: val });
    }
    // 내림차순 정렬
    scoreArray.sort((a, b) => b.score - a.score);
    // 상위 4개
    const top4 = scoreArray.slice(0, 4);

    const container = document.getElementById("question-container");
    container.innerHTML = `
        <div class="question-card fade-in">
            <div class="question-number">부모 체질 검증</div>
            <div class="question-text">부모님의 체질이 아래 리스트에 있습니까?<br>
            <span style="font-size:16px; color:#666; font-weight:400;">(부모님 중 한 분이라도 있다면 선택해주세요)</span>
            </div>
            <div class="options-grid">
                ${top4.map(item => `
                    <button class="option-btn" onclick="handleParentSelect('${item.id}')">
                        ${constitutionNames[item.id] || item.id}
                    </button>
                `).join('')}
                <button class="option-btn" style="background:#f5f5f5; color:#888;" onclick="handleParentSelect('NONE')">
                    이 중에 없음 (또는 모름)
                </button>
            </div>
        </div>
    `;
    updateProgressBar();
}

function handleParentSelect(selectedId) {
    if (selectedId === 'NONE') {
        // 안내 문구 표시를 위한 플래그 전달
        finishTest({ geneticConsidered: true });
    } else {
        // 강제 순위 조정 (Override)
        // 1. 현재 최고 점수 찾기
        let maxScore = 0;
        for (const val of Object.values(scores)) {
            if (val > maxScore) maxScore = val;
        }

        // 2. 선택된 체질의 점수를 Max + 1로 설정하여 1등 만들기
        // (단, 이미 압도적 1등일 수도 있지만 확실히 하기 위해 +1)
        scores[selectedId] = maxScore + 1;

        finishTest();
    }
}

function updateProgressBar() {
    const bar = document.getElementById("progress-bar");
    const container = document.getElementById("progress-container");

    if (bar && container) {
        // 검증 단계일 때는 100%에 가깝게 표시
        let percent = 0;
        if (verificationState !== 'NONE') {
            percent = 95; // 검증 중
        } else {
            percent = ((currentQuestionIndex) / questions.length) * 100;
        }
        bar.style.width = `${percent}%`;
    }
}

function finishTest(options = {}) {
    // 쿼리 파라미터 생성
    const params = new URLSearchParams();

    // 1. 점수 매핑 (V1, V2 모두 사용 가능하도록 표준화)
    // V1 uses: m1score, m2score, t1score...
    // keyMap is: mokyang -> m1, mokeum -> m2 ...

    params.set('m1score', scores.mokyang);
    params.set('m2score', scores.mokeum);
    params.set('t1score', scores.toyang);
    params.set('t2score', scores.toeum);
    params.set('k1score', scores.geumyang);
    params.set('k2score', scores.geumeum);
    params.set('s1score', scores.suyang);
    params.set('s2score', scores.sueum);

    if (options.geneticConsidered) {
        params.set('genetic_var', 'true');
    }

    // 현재 페이지가 v2인지 확인하여 분기
    // (그러나 result_v2.html에서 이미 이 함수를 오버라이드 하고 있을 수 있음.
    //  여기서는 기본 동작인 result.html 이동을 설정)

    // --- Redirect Logic ---
    // If we are in V2 (result_v2.html) or have the finishTest hook, use it.
    // Otherwise default to result.html for V1.
    if (typeof window.finishTest === 'function') {
        window.finishTest({ geneticConsidered: false });
    } else {
        window.location.href = `result.html?${params.toString()}`;
    }
}
