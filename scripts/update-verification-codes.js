#!/usr/bin/env node

/**
 * SEO Verification Codes Update Script
 * 
 * This script helps you update the verification codes in your layout.tsx file
 * Run this after getting your verification codes from Google Search Console and Bing Webmaster Tools
 */

const fs = require('fs');
const path = require('path');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const layoutPath = path.join(__dirname, '../src/app/layout.tsx');

console.log('🚀 SanganakHQ SEO Verification Codes Setup');
console.log('==========================================\n');

console.log('This script will help you update your verification codes.');
console.log('Make sure you have your verification codes ready from:');
console.log('1. Google Search Console (search.google.com/search-console)');
console.log('2. Bing Webmaster Tools (bing.com/webmasters)\n');

function updateVerificationCodes() {
  rl.question('Enter your Google Search Console verification code: ', (googleCode) => {
    rl.question('Enter your Bing Webmaster Tools verification code: ', (bingCode) => {
      rl.question('Enter your Yandex verification code (optional, press Enter to skip): ', (yandexCode) => {
        
        try {
          // Read the current layout.tsx file
          let layoutContent = fs.readFileSync(layoutPath, 'utf8');
          
          // Update Google verification code
          if (googleCode.trim()) {
            layoutContent = layoutContent.replace(
              /<meta name="google-site-verification" content="your-google-verification-code" \/>/,
              `<meta name="google-site-verification" content="${googleCode.trim()}" />`
            );
            console.log('✅ Google verification code updated');
          }
          
          // Update Bing verification code
          if (bingCode.trim()) {
            layoutContent = layoutContent.replace(
              /<meta name="msvalidate.01" content="your-bing-verification-code" \/>/,
              `<meta name="msvalidate.01" content="${bingCode.trim()}" />`
            );
            console.log('✅ Bing verification code updated');
          }
          
          // Update Yandex verification code (optional)
          if (yandexCode.trim()) {
            layoutContent = layoutContent.replace(
              /<meta name="yandex-verification" content="your-yandex-verification-code" \/>/,
              `<meta name="yandex-verification" content="${yandexCode.trim()}" />`
            );
            console.log('✅ Yandex verification code updated');
          }
          
          // Write the updated content back to the file
          fs.writeFileSync(layoutPath, layoutContent, 'utf8');
          
          console.log('\n🎉 Verification codes updated successfully!');
          console.log('\nNext steps:');
          console.log('1. Deploy your changes to production');
          console.log('2. Verify your sites in Google Search Console and Bing Webmaster Tools');
          console.log('3. Submit your sitemap: https://sanganak.org/sitemap.xml');
          console.log('4. Monitor your SEO performance');
          
        } catch (error) {
          console.error('❌ Error updating verification codes:', error.message);
        }
        
        rl.close();
      });
    });
  });
}

// Start the process
updateVerificationCodes();
