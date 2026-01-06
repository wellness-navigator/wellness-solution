document.addEventListener('DOMContentLoaded', function() {
    // 1. Radar Chart: Competitive Analysis
    const ctxRadar = document.getElementById('radarChart').getContext('2d');
    new Chart(ctxRadar, {
        type: 'radar',
        data: {
            labels: ['기술력', '시장성', '데이터', '차별성', '팀 역량'],
            datasets: [{
                label: '당사 경쟁력',
                data: [90, 95, 100, 98, 85],
                backgroundColor: 'rgba(0, 184, 212, 0.2)',
                borderColor: 'rgba(0, 184, 212, 1)',
                pointBackgroundColor: '#00b8d4',
                borderWidth: 2,
                pointRadius: 3
            }, {
                label: '기존 시장 평균',
                data: [60, 80, 50, 40, 60],
                backgroundColor: 'rgba(200, 200, 200, 0.1)',
                borderColor: 'rgba(200, 200, 200, 0.5)',
                borderWidth: 1,
                pointRadius: 0
            }]
        },
        options: {
            scales: {
                r: {
                    angleLines: { color: '#eee' },
                    grid: { color: '#eee' },
                    pointLabels: {
                        font: { size: 12, family: "'Noto Sans KR', sans-serif" },
                        color: '#666'
                    },
                    suggestedMin: 0,
                    suggestedMax: 100,
                    ticks: { display: false }
                }
            },
            plugins: {
                legend: { position: 'bottom', labels: { boxWidth: 10, font: { size: 11 } } }
            }
        }
    });

    // 2. Line Chart: Market Growth
    const ctxLine = document.getElementById('lineChart').getContext('2d');
    new Chart(ctxLine, {
        type: 'line',
        data: {
            labels: ['2023', '2024', '2025', '2026', '2027', '2030'],
            datasets: [{
                label: '글로벌 정밀 영양 시장 (억$)',
                data: [90, 110, 157, 180, 200, 233],
                borderColor: '#00b8d4',
                backgroundColor: (context) => {
                    const ctx = context.chart.ctx;
                    const gradient = ctx.createLinearGradient(0, 0, 0, 200);
                    gradient.addColorStop(0, 'rgba(0, 184, 212, 0.4)');
                    gradient.addColorStop(1, 'rgba(0, 184, 212, 0.0)');
                    return gradient;
                },
                fill: true,
                tension: 0.4,
                borderWidth: 3,
                pointBackgroundColor: '#fff',
                pointBorderColor: '#00b8d4',
                pointRadius: 4
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: false,
                    grid: { borderDash: [5, 5], color: '#f0f0f0' },
                    ticks: { display: false }
                },
                x: {
                    grid: { display: false },
                    ticks: { font: { size: 11 } }
                }
            },
            plugins: {
                legend: { display: false }
            }
        }
    });
});
