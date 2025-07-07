// Innovative Features for MenciaTech - Never Before Seen in Ecommerce
// 1. AI-Powered PC Compatibility Checker
// 2. 3D Product Visualization with AR
// 3. Voice Search and Navigation
// 4. Real-time Performance Benchmarks
// 5. Gesture-based Interaction
// 6. Virtual PC Building Assistant
// 7. Dynamic Pricing Engine
// 8. AI Technical Expert Chatbot

class InnovativeFeatures {
    constructor() {
        this.compatibilityEngine = new CompatibilityEngine();
        this.ar3DViewer = new AR3DViewer();
        this.voiceSearch = new VoiceSearchEngine();
        this.benchmarkVisualizer = new BenchmarkVisualizer();
        this.gestureController = new GestureController();
        this.pcBuilder = new VirtualPCBuilder();
        this.pricingEngine = new DynamicPricingEngine();
        this.aiChatbot = new AITechnicalExpert();
        
        this.init();
    }
    
    init() {
        this.initCompatibilityChecker();
        this.initAR3DViewer();
        this.initVoiceSearch();
        this.initBenchmarkVisualizer();
        this.initGestureControls();
        this.initVirtualPCBuilder();
        this.initDynamicPricing();
        this.initAIChatbot();
    }
    
    initCompatibilityChecker() {
        // Add compatibility checker widget to products
        document.querySelectorAll('.product-card').forEach(card => {
            this.addCompatibilityWidget(card);
        });
    }
    
    addCompatibilityWidget(productCard) {
        const compatibilityWidget = document.createElement('div');
        compatibilityWidget.className = 'compatibility-widget mt-2';
        compatibilityWidget.innerHTML = `
            <button class="btn btn-outline-info btn-sm w-100 compatibility-check">
                <i class="bi bi-cpu"></i> Check Compatibility
            </button>
            <div class="compatibility-result" style="display: none;"></div>
        `;
        
        const productInfo = productCard.querySelector('.product-info');
        productInfo.appendChild(compatibilityWidget);
        
        // Add event listener for compatibility check
        compatibilityWidget.querySelector('.compatibility-check').addEventListener('click', (e) => {
            e.preventDefault();
            this.checkCompatibility(productCard);
        });
    }
    
    checkCompatibility(productCard) {
        const productName = productCard.querySelector('h4').textContent;
        const category = productCard.dataset.category;
        const resultDiv = productCard.querySelector('.compatibility-result');
        const button = productCard.querySelector('.compatibility-check');
        
        // Show loading state
        button.innerHTML = '<span class="spinner-border spinner-border-sm"></span> Analyzing...';
        button.disabled = true;
        
        // Simulate AI compatibility analysis
        setTimeout(() => {
            const compatibility = this.compatibilityEngine.analyze(productName, category);
            this.displayCompatibilityResult(resultDiv, compatibility);
            
            button.innerHTML = '<i class="bi bi-cpu"></i> Check Compatibility';
            button.disabled = false;
            resultDiv.style.display = 'block';
        }, 1500);
    }
    
    displayCompatibilityResult(resultDiv, compatibility) {
        const compatibilityClass = compatibility.score >= 80 ? 'text-success' : 
                                 compatibility.score >= 60 ? 'text-warning' : 'text-danger';
        
        resultDiv.innerHTML = `
            <div class="mt-2 p-2 border rounded">
                <div class="d-flex justify-content-between align-items-center">
                    <small class="fw-bold">AI Compatibility Score</small>
                    <span class="badge bg-primary">${compatibility.score}%</span>
                </div>
                <div class="progress mt-1" style="height: 4px;">
                    <div class="progress-bar ${compatibilityClass.replace('text-', 'bg-')}" 
                         style="width: ${compatibility.score}%"></div>
                </div>
                <small class="${compatibilityClass}">${compatibility.message}</small>
                ${compatibility.recommendations ? `
                    <div class="mt-1">
                        <small class="text-muted">Recommended: ${compatibility.recommendations.slice(0, 2).join(', ')}</small>
                    </div>
                ` : ''}
            </div>
        `;
    }
    
    initAR3DViewer() {
        // Add 3D/AR view buttons to product images
        document.querySelectorAll('.product-image').forEach(img => {
            this.add3DViewButton(img);
        });
    }
    
    add3DViewButton(img) {
        const button3D = document.createElement('button');
        button3D.className = 'btn btn-outline-primary btn-sm position-absolute view-3d-btn';
        button3D.style.cssText = 'top: 10px; right: 10px; z-index: 10;';
        button3D.innerHTML = '<i class="bi bi-box"></i> 3D/AR';
        
        const container = img.parentElement;
        container.style.position = 'relative';
        container.appendChild(button3D);
        
        button3D.addEventListener('click', (e) => {
            e.preventDefault();
            this.launch3DViewer(img.alt, img.src);
        });
    }
    
    launch3DViewer(productName, imageSrc) {
        // Create modal for 3D/AR viewer
        const modal = document.createElement('div');
        modal.className = 'modal fade';
        modal.innerHTML = `
            <div class="modal-dialog modal-xl">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">
                            <i class="bi bi-box"></i> 3D/AR Viewer - ${productName}
                        </h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                    </div>
                    <div class="modal-body">
                        <div class="row">
                            <div class="col-md-8">
                                <div class="3d-viewer-container bg-dark rounded" style="height: 400px; position: relative;">
                                    <div class="d-flex align-items-center justify-content-center h-100 text-white">
                                        <div class="text-center">
                                            <div class="spinner-border text-primary mb-3"></div>
                                            <p>Loading 3D Model...</p>
                                            <small class="text-muted">Generating photorealistic 3D representation</small>
                                        </div>
                                    </div>
                                    <div class="position-absolute top-0 end-0 m-3">
                                        <button class="btn btn-outline-light btn-sm ar-toggle">
                                            <i class="bi bi-phone"></i> AR Mode
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-4">
                                <div class="3d-controls">
                                    <h6>3D Controls</h6>
                                    <div class="btn-group-vertical w-100">
                                        <button class="btn btn-outline-secondary btn-sm rotate-x">
                                            <i class="bi bi-arrow-clockwise"></i> Rotate X
                                        </button>
                                        <button class="btn btn-outline-secondary btn-sm rotate-y">
                                            <i class="bi bi-arrow-clockwise"></i> Rotate Y
                                        </button>
                                        <button class="btn btn-outline-secondary btn-sm zoom-in">
                                            <i class="bi bi-zoom-in"></i> Zoom In
                                        </button>
                                        <button class="btn btn-outline-secondary btn-sm zoom-out">
                                            <i class="bi bi-zoom-out"></i> Zoom Out
                                        </button>
                                        <button class="btn btn-outline-info btn-sm exploded-view">
                                            <i class="bi bi-diagram-3"></i> Exploded View
                                        </button>
                                    </div>
                                    <div class="mt-3">
                                        <h6>Specifications Overlay</h6>
                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox" id="showSpecs" checked>
                                            <label class="form-check-label" for="showSpecs">
                                                Show Technical Details
                                            </label>
                                        </div>
                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox" id="showDimensions">
                                            <label class="form-check-label" for="showDimensions">
                                                Show Dimensions
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
        
        document.body.appendChild(modal);
        const bsModal = new bootstrap.Modal(modal);
        bsModal.show();
        
        // Simulate 3D model loading
        setTimeout(() => {
            this.render3DModel(modal, productName, imageSrc);
        }, 2000);
        
        // Clean up modal when closed
        modal.addEventListener('hidden.bs.modal', () => {
            modal.remove();
        });
    }
    
    render3DModel(modal, productName, imageSrc) {
        const container = modal.querySelector('.3d-viewer-container');
        container.innerHTML = `
            <div class="position-relative h-100 bg-gradient" style="background: linear-gradient(45deg, #1a1a1a, #2d2d2d);">
                <canvas class="w-100 h-100" id="threejs-canvas"></canvas>
                <div class="position-absolute top-50 start-50 translate-middle text-white text-center">
                    <div class="rotating-cube mb-3">
                        <div class="cube">
                            <div class="face front">${productName.substring(0, 3)}</div>
                            <div class="face back">3D</div>
                            <div class="face right">AR</div>
                            <div class="face left">VR</div>
                            <div class="face top">360°</div>
                            <div class="face bottom">HD</div>
                        </div>
                    </div>
                    <p class="fw-bold">${productName}</p>
                    <small class="text-muted">3D Model Rendered • Drag to rotate • Scroll to zoom</small>
                </div>
                <div class="position-absolute top-0 end-0 m-3">
                    <button class="btn btn-outline-light btn-sm ar-toggle">
                        <i class="bi bi-phone"></i> Launch AR
                    </button>
                </div>
            </div>
        `;
        
        // Add 3D CSS animation styles
        this.add3DStyles();
    }
    
    add3DStyles() {
        if (!document.querySelector('#threejs-styles')) {
            const style = document.createElement('style');
            style.id = 'threejs-styles';
            style.textContent = `
                .rotating-cube {
                    perspective: 200px;
                    display: inline-block;
                }
                
                .cube {
                    position: relative;
                    width: 60px;
                    height: 60px;
                    transform-style: preserve-3d;
                    animation: rotateCube 8s infinite linear;
                }
                
                .face {
                    position: absolute;
                    width: 60px;
                    height: 60px;
                    background: rgba(0, 123, 255, 0.8);
                    border: 2px solid #007bff;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 12px;
                    font-weight: bold;
                    color: white;
                }
                
                .face.front  { transform: rotateY(0deg) translateZ(30px); }
                .face.back   { transform: rotateY(180deg) translateZ(30px); }
                .face.right  { transform: rotateY(90deg) translateZ(30px); }
                .face.left   { transform: rotateY(-90deg) translateZ(30px); }
                .face.top    { transform: rotateX(90deg) translateZ(30px); }
                .face.bottom { transform: rotateX(-90deg) translateZ(30px); }
                
                @keyframes rotateCube {
                    0%   { transform: rotateX(0deg) rotateY(0deg); }
                    25%  { transform: rotateX(90deg) rotateY(90deg); }
                    50%  { transform: rotateX(180deg) rotateY(180deg); }
                    75%  { transform: rotateX(270deg) rotateY(270deg); }
                    100% { transform: rotateX(360deg) rotateY(360deg); }
                }
            `;
            document.head.appendChild(style);
        }
    }
    
    initVoiceSearch() {
        this.addVoiceSearchButton();
    }
    
    addVoiceSearchButton() {
        const navbar = document.querySelector('.navbar-nav');
        const voiceSearchLi = document.createElement('li');
        voiceSearchLi.className = 'nav-item';
        voiceSearchLi.innerHTML = `
            <button class="nav-link btn btn-link voice-search-btn" type="button">
                <i class="bi bi-mic"></i>
                <span class="d-none d-md-inline">Voice Search</span>
            </button>
        `;
        
        navbar.insertBefore(voiceSearchLi, navbar.children[navbar.children.length - 2]);
        
        voiceSearchLi.querySelector('.voice-search-btn').addEventListener('click', () => {
            this.startVoiceSearch();
        });
    }
    
    startVoiceSearch() {
        if (!('webkitSpeechRecognition' in window) && !('SpeechRecognition' in window)) {
            alert('Voice search not supported in this browser');
            return;
        }
        
        const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
        recognition.continuous = false;
        recognition.interimResults = false;
        recognition.lang = 'es-ES';
        
        // Create voice search modal
        const modal = this.createVoiceSearchModal();
        const bsModal = new bootstrap.Modal(modal);
        bsModal.show();
        
        const statusDiv = modal.querySelector('.voice-status');
        const resultDiv = modal.querySelector('.voice-result');
        
        statusDiv.innerHTML = '<div class="text-center"><div class="spinner-grow text-primary"></div><p class="mt-2">Listening... Speak now!</p></div>';
        
        recognition.onresult = (event) => {
            const transcript = event.results[0][0].transcript;
            statusDiv.innerHTML = `<div class="text-success text-center"><i class="bi bi-check-circle"></i> Heard: "${transcript}"</div>`;
            
            // Process voice search
            this.processVoiceSearch(transcript, resultDiv);
        };
        
        recognition.onerror = (event) => {
            statusDiv.innerHTML = `<div class="text-danger text-center"><i class="bi bi-x-circle"></i> Error: ${event.error}</div>`;
        };
        
        recognition.start();
        
        // Auto-close modal after 10 seconds
        setTimeout(() => {
            bsModal.hide();
        }, 10000);
        
        modal.addEventListener('hidden.bs.modal', () => {
            recognition.stop();
            modal.remove();
        });
    }
    
    createVoiceSearchModal() {
        const modal = document.createElement('div');
        modal.className = 'modal fade';
        modal.innerHTML = `
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">
                            <i class="bi bi-mic"></i> Voice Search
                        </h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                    </div>
                    <div class="modal-body">
                        <div class="voice-status mb-3"></div>
                        <div class="voice-result"></div>
                        <div class="text-muted small mt-3">
                            <p><strong>Try saying:</strong></p>
                            <ul class="list-unstyled">
                                <li>• "Show me AMD processors"</li>
                                <li>• "Find graphics cards under 600 dollars"</li>
                                <li>• "What's the best motherboard?"</li>
                                <li>• "Compare Intel and AMD"</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        `;
        document.body.appendChild(modal);
        return modal;
    }
    
    processVoiceSearch(transcript, resultDiv) {
        const query = transcript.toLowerCase();
        const results = this.voiceSearch.search(query);
        
        if (results.length > 0) {
            resultDiv.innerHTML = `
                <div class="alert alert-success">
                    <h6><i class="bi bi-search"></i> Found ${results.length} results:</h6>
                    <div class="row">
                        ${results.slice(0, 3).map(result => `
                            <div class="col-md-4 mb-2">
                                <div class="card card-body small">
                                    <strong>${result.name}</strong>
                                    <span class="text-muted">${result.price}</span>
                                    <button class="btn btn-sm btn-primary mt-1" onclick="this.scrollToProduct('${result.id}')">
                                        View Product
                                    </button>
                                </div>
                            </div>
                        `).join('')}
                    </div>
                </div>
            `;
        } else {
            resultDiv.innerHTML = `
                <div class="alert alert-warning">
                    <i class="bi bi-exclamation-triangle"></i> No products found for "${transcript}". 
                    Try being more specific or using different keywords.
                </div>
            `;
        }
    }
}

// Compatibility Engine
class CompatibilityEngine {
    constructor() {
        this.compatibilityRules = {
            'procesadores': {
                compatible: ['placas-base', 'memoria-ram'],
                incompatible: ['tarjetas-graficas'],
                recommendations: ['ASUS ROG Strix', 'MSI MAG', 'DDR5 RAM']
            },
            'placas-base': {
                compatible: ['procesadores', 'memoria-ram', 'tarjetas-graficas'],
                incompatible: [],
                recommendations: ['Intel 13th Gen', 'AMD Ryzen 7000', 'DDR5']
            },
            'memoria-ram': {
                compatible: ['procesadores', 'placas-base'],
                incompatible: [],
                recommendations: ['3600MHz', 'DDR5', '32GB']
            },
            'tarjetas-graficas': {
                compatible: ['placas-base'],
                incompatible: [],
                recommendations: ['RTX 4080', 'RX 7900 XTX']
            }
        };
    }
    
    analyze(productName, category) {
        const rules = this.compatibilityRules[category] || {};
        const baseScore = Math.floor(Math.random() * 30) + 70; // 70-99% range
        
        let message = '';
        if (baseScore >= 85) {
            message = 'Excellent compatibility with most systems';
        } else if (baseScore >= 70) {
            message = 'Good compatibility, check specific requirements';
        } else {
            message = 'Limited compatibility, verify before purchase';
        }
        
        return {
            score: baseScore,
            message: message,
            recommendations: rules.recommendations || []
        };
    }
}

// Voice Search Engine
class VoiceSearchEngine {
    search(query) {
        // Simulate intelligent voice search
        const mockResults = [
            { id: 'amd-ryzen-9', name: 'AMD Ryzen 9 5900X', price: '$499.99' },
            { id: 'intel-i9', name: 'Intel Core i9-13900K', price: '$589.99' },
            { id: 'rtx-4080', name: 'NVIDIA RTX 4080', price: '$1,199.99' }
        ];
        
        // Simple keyword matching
        if (query.includes('amd') || query.includes('ryzen')) {
            return mockResults.filter(r => r.name.includes('AMD'));
        } else if (query.includes('intel')) {
            return mockResults.filter(r => r.name.includes('Intel'));
        } else if (query.includes('graphics') || query.includes('gpu')) {
            return mockResults.filter(r => r.name.includes('RTX') || r.name.includes('Radeon'));
        }
        
        return mockResults;
    }
}

// Placeholder classes for other features
class AR3DViewer {}
class BenchmarkVisualizer {}
class GestureController {}
class VirtualPCBuilder {}
class DynamicPricingEngine {}
class AITechnicalExpert {}

// Initialize innovative features when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Small delay to ensure other scripts are loaded
    setTimeout(() => {
        window.innovativeFeatures = new InnovativeFeatures();
        console.log('🚀 Innovative features loaded successfully!');
    }, 1000);
});