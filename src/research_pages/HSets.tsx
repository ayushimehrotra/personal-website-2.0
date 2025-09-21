import { Link } from 'react-router-dom';

const HSetsPage = () => {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-gradient-to-br from-pink-200 via-purple-200 to-yellow-200 opacity-60 blur-sm"></div>
      <div className="absolute top-10 right-16 w-24 h-24 rounded-full bg-gradient-to-br from-purple-200 via-pink-200 to-blue-200 opacity-50 blur-sm"></div>
      
      <div className="pt-20 px-8 lg:px-16 max-w-4xl mx-auto relative z-10">
        <Link to="/" className="text-blue-100 hover:text-blue-200 transition-colors duration-200 text-sm font-medium">
            ← Back to Home
        </Link>
        
        <div className="mt-12 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-white leading-tight">
            H-Sets: Uncovering Feature Interactions in Image Classifiers Using Hessian
          </h1>
        </div>
        
        <div className="mt-16">
          <h2 className="text-2xl font-sans font-semibold text-white mb-6 text-center">abstract</h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-white font-sans leading-relaxed text-lg">
              Feature attribution methods explain the predictions of deep neural networks by assigning 
              importance scores to individual input features. However, most existing methods focus solely
               on marginal effects, overlooking <em> feature interactions</em>, where groups of features 
               jointly influence model output. Such interactions are especially important in image classification 
               tasks, where semantic meaning often arises from pixel interdependencies rather than isolated 
               features. Existing interaction-based methods for images are either coarse or computationally 
               expensive, and many fail to satisfy core interpretability axioms. In this work, we propose 
               <b>H-Sets (Hessian-Sets)</b>, a novel framework for discovering and attributing higher-order 
               feature interactions in image classifiers. H-Sets uses the Hessian matrix to detect pairwise 
               interactions and recursively merges them into semantically coherent feature sets. To ensure 
               interpretability, we incorporate segmentation masks from the Segment Anything Model (SAM), 
               grounding feature groups in meaningful regions. Evaluations across VGG, ResNet, DenseNet 
               and MobileNet models on ImageNet and CUB datasets show that H-Sets generate more interpretable 
               and faithful saliency maps compared to existing methods. 
            </p>
          </div>
        </div>
        
        <div className="mt-16">
          <h2 className="text-2xl font-sans font-semibold text-indigo-200 mb-8 text-center">demo</h2>
          <div className="max-w-4xl mx-auto">
            <div className="bg-gray-800 rounded-2xl p-12 flex items-center justify-center min-h-[300px]">
              <span className="text-gray-400 text-lg font-medium">
                [insert animation gif]
              </span>
            </div>
          </div>
        </div>
        
        <div className="mt-12 text-center">
          <a 
            href="https://github.com/ayushimehrotra/H-Sets" 
            className="text-gray-600 hover:text-gray-800 underline text-lg font-medium transition-colors duration-200"
          >
            github
          </a>
        </div>
        
        <div className="pb-20"></div>
      </div>
    </div>
  );
};

export default HSetsPage;