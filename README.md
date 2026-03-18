# 🎨 K-StyleLoRA: Information-Guided Image Generation via Selective Feature Learning

[![ICCV 2025](https://img.shields.io/badge/ICCV-2025-blue)](https://openaccess.thecvf.com/ICCV2025W)
[![Paper](https://img.shields.io/badge/Paper-PDF-red)](https://openaccess.thecvf.com/content/ICCV2025W/WCCA/papers/Lee_K-StyleLoRA_Information-Guided_Image_Generation_via_Selective_Feature_Learning_ICCVW_2025_paper.pdf)
[![Code](https://img.shields.io/badge/Code-GitHub-black)](https://github.com/K-StyleLoRA)
[![License](https://img.shields.io/badge/License-CC--BY--SA--4.0-green)](http://creativecommons.org/licenses/by-sa/4.0/)

> **🏆 ICCV 2025 WCCA Oral Presentation** 🏆

Official repository for the K-StyleLoRA project website, presented at the **International Conference on Computer Vision (ICCV) 2025 Workshop on Computer Vision for Cultural Applications (WCCA)**.

## 📖 Abstract

Despite remarkable advances in image generation, existing diffusion models struggle to capture diverse cultural aesthetics. While Low-Rank Adaptation (LoRA) enables efficient fine-tuning, conventional approaches lack semantic awareness. They apply uniform adaptations across all features, leading to suboptimal cultural representation.

**K-StyleLoRA** addresses these limitations by introducing a novel framework that leverages CLIP's cross-modal capabilities for cultural image generation. Our approach establishes semantic-aware adaptation as a powerful paradigm for cultural representation, achieving a **9.6% improvement** in Cultural Similarity Score over vanilla SDXL baseline.

## ✨ Key Contributions

### 1. CLIP-Guided Information Gating
Dynamically modulates LoRA adaptations based on cultural relevance scores, selectively enhancing relevant features while suppressing irrelevant ones. This enables more precise and culturally-aware feature learning.

### 2. Cultural Semantic Loss
Provides additional semantic guidance by optimizing CLIP-based similarity to cultural concepts, ensuring generated images maintain high cultural fidelity while preserving generation quality and diversity.

## 🎯 Results

- **Cultural Similarity Score**: 0.274 (9.6% improvement over vanilla SDXL baseline: 0.250)
- **Superior cultural fidelity** while maintaining generation quality and diversity
- **Exceptional cultural transfer capability** on generic prompts requiring implicit cultural understanding

## 👥 Authors

| Author | Affiliation |
|--------|------------|
| **Soyoung Lee**<sup>1</sup> | Chung-Ang University |
| **Hyoungseo Cho**<sup>2</sup> | Seoul National University |
| **Myungjoo Kang**<sup>2</sup> | Seoul National University |
| **Youngjoon Yoo**<sup>1</sup> | Chung-Ang University |

<sup>1</sup>Chung-Ang University  
<sup>2</sup>Seoul National University

## 🌐 Website Features

Our interactive website showcases:

- **🎬 Visual Effects**: High-quality image generation results demonstrating selective feature learning
- **📊 Results**: Comprehensive performance analysis of information-guided image generation
- **⚖️ Comparison**: Side-by-side visual comparison between Vanilla SDXL and K-StyleLoRA
- **🎮 Interactive Interpolation**: Explore smooth transitions between states using an interactive slider with play/pause controls

## 📚 Citation

If you find K-StyleLoRA useful for your research, please cite our paper:

```bibtex
@inproceedings{lee2025kstylelora,
  title={K-StyleLoRA: Information-Guided Image Generation via Selective Feature Learning},
  author={Lee, Soyoung and Cho, Hyoungseo and Kang, Myungjoo and Yoo, YoungJoon},
  booktitle={Proceedings of the IEEE/CVF International Conference on Computer Vision Workshops (ICCVW)},
  pages={4465--4472},
  year={2025},
  organization={IEEE/CVF}
}
```

**Reference Format (APA):**
Lee, S., Cho, H., Kang, M., & Yoo, Y. (2025). K-StyleLoRA: Information-Guided Image Generation via Selective Feature Learning. *Proceedings of the IEEE/CVF International Conference on Computer Vision Workshops (ICCVW)*, 4465-4472.

**Reference Format (IEEE):**
S. Lee, H. Cho, M. Kang, and Y. Yoo, "K-StyleLoRA: Information-Guided Image Generation via Selective Feature Learning," in *Proc. IEEE/CVF Int. Conf. Comput. Vis. Workshops (ICCVW)*, 2025, pp. 4465-4472.

## 🔗 Links

- **📄 Paper**: [ICCV 2025 WCCA Proceedings](https://openaccess.thecvf.com/content/ICCV2025W/WCCA/papers/Lee_K-StyleLoRA_Information-Guided_Image_Generation_via_Selective_Feature_Learning_ICCVW_2025_paper.pdf)
- **💻 Code**: [GitHub Repository](https://github.com/K-StyleLoRA)
- **🌍 Website**: [Project Page](https://chohyoungseo.github.io/K-StyleLoRA-web/)

## 📄 License

This website is licensed under a [Creative Commons Attribution-ShareAlike 4.0 International License](http://creativecommons.org/licenses/by-sa/4.0/).

<a rel="license" href="http://creativecommons.org/licenses/by-sa/4.0/"><img alt="Creative Commons License" style="border-width:0" src="https://i.creativecommons.org/l/by-sa/4.0/88x31.png" /></a>

## 🙏 Acknowledgments

We thank the ICCV 2025 WCCA organizers and reviewers for their valuable feedback. This work was supported by Chung-Ang University and Seoul National University.

**Code & Website Credits:**
- Our implementation is based on [B-LoRA](https://github.com/yardenfren1996/B-LoRA) for the core methodology.
- This website is built upon the [Nerfies project page template](https://github.com/google/nerfies).

---

**⭐ Star this repository if you find it helpful!**
