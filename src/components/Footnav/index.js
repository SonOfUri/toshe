import React from 'react';
import logo from '../../intelai.png';


const Footnav = () => {
  return (
    <div class="footer">
      <div class="footer-img">
        <img id="logo2-image" src={logo} alt="Logo" />
      </div>
      <div class="footer-links">
        <a href="https://t.me/IntelAIerc" target="_blank">
          <i class="bx bxl-telegram"></i>
        </a>

        <a href="https://x.com/intelaieth" target="_blank">
          <i class="bx bxl-twitter"></i>
        </a>

        <a href="https://intel-ai-bot.gitbook.io/" target="_blank">
          <i class="bx bxs-file-doc"></i>
        </a>
      </div>
    </div>
  );
}

export default Footnav