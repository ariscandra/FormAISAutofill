/**
 * Skrip Autofill Kuesioner Dosen - Console Version
 * 
 * Cara penggunaan:
 * 1. Buka halaman KHS di AIS Unmul
 * 2. Buka Developer Console (F12)
 * 3. Copy-paste seluruh kode ini ke console
 * 4. Tekan Enter
 * 
 * Untuk autofill:
 * - autoFillAllKuisioner() : Autofill semua kuesioner dengan nilai default (5)
 * - autoFillAllKuisioner(3) : Autofill semua dengan nilai 3
 * - setKuisionerValue(4) : Set nilai default menjadi 4
 * - getKuisionerValue() : Lihat nilai saat ini
 */

(function() {
    'use strict';

    // ==================== KONFIGURASI ====================
    // Nilai default kuesioner (1-5)
    // 1 = Sangat tidak setuju, 2 = Tidak setuju, 3 = Cukup setuju
    // 4 = Setuju, 5 = Sangat setuju (default)
    let kuisionerValue = 5;
    // =====================================================

    // Variabel global untuk tracking kuesioner
    let kuisionerLinksList = [];

    // Fungsi untuk mendapatkan nilai kuesioner
    function getKuisionerValue() {
        return kuisionerValue;
    }

    // Fungsi untuk menyimpan nilai kuesioner
    function setKuisionerValue(value) {
        if (value >= 1 && value <= 5) {
            kuisionerValue = value;
            console.log(`✅ Nilai kuesioner diset ke: ${value}`);
            const labels = ['Sangat tidak setuju', 'Tidak setuju', 'Cukup setuju', 'Setuju', 'Sangat setuju'];
            console.log(`   Label: ${labels[value - 1]}`);
            return true;
        }
        console.error('❌ Nilai harus antara 1-5');
        return false;
    }

    // Fungsi untuk mengisi semua radio button dengan nilai yang dikonfigurasi
    function fillAllWithValue(value = null) {
        const nilai = value !== null ? value : getKuisionerValue();
        const allRadioButtons = document.querySelectorAll('input[type="radio"][name^="respon["]');
        
        let filledCount = 0;
        allRadioButtons.forEach(radio => {
            if (radio.value === String(nilai)) {
                radio.checked = true;
                radio.dispatchEvent(new Event('change', { bubbles: true }));
                radio.dispatchEvent(new Event('click', { bubbles: true }));
                filledCount++;
            }
        });
        
        const nilaiLabels = ['Sangat tidak setuju', 'Tidak setuju', 'Cukup setuju', 'Setuju', 'Sangat setuju'];
        const nilaiLabel = nilaiLabels[nilai - 1] || `Nilai ${nilai}`;
        console.log(`✅ Mengisi ${filledCount} radio button dengan nilai ${nilai} (${nilaiLabel})`);
        return filledCount;
    }

    // Fungsi untuk klik tombol Next
    function clickNext() {
        const nextBtn = document.getElementById('nextbtn');
        if (nextBtn && !nextBtn.disabled) {
            nextBtn.click();
            console.log('✅ Klik tombol Next');
            return true;
        }
        return false;
    }

    // Fungsi untuk submit form (klik tombol Submit)
    function submitForm(onComplete) {
        const nextBtn = document.getElementById('nextbtn');
        const nextBtnText = nextBtn ? nextBtn.textContent.trim().toLowerCase() : '';
        
        // Jika tombol berubah jadi "Submit" atau "Simpan", klik tombol tersebut
        if (nextBtn && (nextBtnText.includes('submit') || nextBtnText.includes('simpan'))) {
            nextBtn.click();
            console.log('✅ Klik tombol Submit');
            
            // Jika ada callback, tunggu sebentar lalu panggil (setelah redirect/close modal)
            if (onComplete) {
                setTimeout(() => {
                    onComplete();
                }, 2000);
            }
            return true;
        }
        
        // Fallback: coba submit form langsung
        const activeForm = document.querySelector('.form-kuisioner');
        if (activeForm) {
            activeForm.submit();
            console.log('✅ Submit form (direct)');
            
            if (onComplete) {
                setTimeout(() => {
                    onComplete();
                }, 2000);
            }
            return true;
        }
        
        console.log('❌ Tidak ditemukan tombol Submit atau form');
        return false;
    }

    // Fungsi untuk mendapatkan step saat ini
    function getCurrentStep() {
        const forms = ['form-1', 'form-2', 'form-3', 'form-4', 'form-5'];
        for (let i = 0; i < forms.length; i++) {
            const form = document.getElementById(forms[i]);
            if (form && (form.style.display === 'flex' || 
                (form.style.display !== 'none' && !form.style.display))) {
                return i + 1;
            }
        }
        return 0;
    }

    // Fungsi utama untuk autofill dan navigasi
    function autoFillKuisioner(onComplete, customValue = null) {
        const currentStep = getCurrentStep();
        const nilai = customValue !== null ? customValue : getKuisionerValue();
        console.log(`🚀 Step ${currentStep}: Memulai autofill kuesioner dengan nilai ${nilai}...`);
        
        const nextBtn = document.getElementById('nextbtn');
        const nextBtnText = nextBtn ? nextBtn.textContent.trim().toLowerCase() : '';
        
        // Jika tombol sudah berubah jadi "Submit", langsung submit (step 6)
        if (nextBtn && (nextBtnText.includes('submit') || nextBtnText.includes('simpan'))) {
            console.log('📝 Step terakhir (Submit), klik tombol Submit...');
            setTimeout(() => {
                submitForm(onComplete);
            }, 500);
            return;
        }
        
        // Isi form dengan nilai yang dikonfigurasi
        const filled = fillAllWithValue(customValue);
        
        // Jika tidak ada yang perlu diisi, mungkin sudah di step terakhir (step 6)
        if (filled === 0) {
            console.log('⚠️ Tidak ada radio button yang perlu diisi.');
            
            // Cek apakah ini step 6 (tombol Submit)
            if (nextBtn && (nextBtnText.includes('submit') || nextBtnText.includes('simpan'))) {
                console.log('📝 Step terakhir, klik tombol Submit...');
                setTimeout(() => {
                    submitForm(onComplete);
                }, 500);
                return;
            }
            
            // Jika belum step terakhir, tunggu dan coba lagi
            setTimeout(() => {
                autoFillKuisioner(onComplete);
            }, 500);
            return;
        }
        
        setTimeout(() => {
            const nextBtnCheck = document.getElementById('nextbtn');
            const nextBtnTextCheck = nextBtnCheck ? nextBtnCheck.textContent.trim().toLowerCase() : '';
            
            // Cek apakah Next button masih ada dan enabled (belum jadi Submit)
            if (nextBtnCheck && !nextBtnCheck.disabled && !nextBtnTextCheck.includes('simpan') && !nextBtnTextCheck.includes('submit')) {
                // Masih bisa lanjut ke step berikutnya
                console.log(`➡️ Pindah ke step berikutnya...`);
                clickNext();
                setTimeout(() => {
                    autoFillKuisioner(onComplete);
                }, 800);
            } else {
                // Next button disabled atau berubah jadi Simpan/Submit, berarti step terakhir
                console.log('📝 Step terakhir, klik tombol Submit...');
                setTimeout(() => {
                    submitForm(onComplete);
                }, 500);
            }
        }, 400);
    }

    // Fungsi untuk menunggu modal terbuka
    function waitForModal(callback, maxWait = 5000) {
        const startTime = Date.now();
        const checkInterval = setInterval(() => {
            const kuisionerForm = document.querySelector('.form-kuisioner');
            const modal = document.querySelector('.modal.show, .modal[style*="display: block"]');
            
            if (kuisionerForm || modal) {
                clearInterval(checkInterval);
                console.log('✅ Modal/form kuesioner ditemukan');
                callback();
            } else if (Date.now() - startTime > maxWait) {
                clearInterval(checkInterval);
                console.log('⚠️ Timeout menunggu modal');
                callback();
            }
        }, 200);
    }

    // Fungsi untuk mengambil semua link kuesioner
    function getAllKuisionerLinks() {
        const allLinks = Array.from(document.querySelectorAll('a'));
        return allLinks.filter(link => 
            (link.classList.contains('kuisioner') || 
             link.textContent.includes('Isi Kuisioner')) && 
            link.href.includes('/kuisioner/')
        );
    }

    // Fungsi untuk memproses kuesioner berikutnya
    function processNextKuisioner() {
        // Tunggu sebentar untuk memastikan halaman sudah kembali ke KHS
        setTimeout(() => {
            // Cek apakah kita kembali ke halaman KHS (bukan halaman kuesioner)
            const isKuisionerPage = window.location.href.includes('/kuisioner/');
            
            if (isKuisionerPage) {
                // Masih di halaman kuesioner, tunggu lagi
                console.log('⏳ Menunggu kembali ke halaman KHS...');
                processNextKuisioner();
                return;
            }
            
            // Ambil ulang daftar link kuesioner (karena link yang sudah diisi akan hilang)
            kuisionerLinksList = getAllKuisionerLinks();
            
            // Jika tidak ada lagi link kuesioner, berarti sudah selesai
            if (kuisionerLinksList.length === 0) {
                console.log('✅ Semua kuesioner sudah selesai diisi!');
                return;
            }
            
            console.log(`\n🔄 Memproses kuesioner berikutnya... (Tersisa: ${kuisionerLinksList.length} kuesioner)`);
            
            // Ambil link pertama (karena link yang sudah diisi akan hilang dari daftar)
            const nextLink = kuisionerLinksList[0];
            if (nextLink) {
                console.log(`🌐 Membuka kuesioner berikutnya...`);
                nextLink.click();
                
                // Tunggu modal terbuka, lalu mulai autofill
                waitForModal(() => {
                    setTimeout(() => {
                        autoFillKuisioner(() => {
                            // Setelah submit selesai, lanjut ke kuesioner berikutnya
                            processNextKuisioner();
                        });
                    }, 500);
                });
            } else {
                console.log('❌ Link kuesioner tidak ditemukan');
            }
        }, 1500);
    }

    // Fungsi untuk autofill semua kuesioner dari halaman utama
    function autoFillAllKuisioner(customValue = null) {
        console.log('🔍 Mencari semua link "Isi Kuisioner"...');
        
        kuisionerLinksList = getAllKuisionerLinks();
        
        if (kuisionerLinksList.length === 0) {
            console.log('❌ Tidak ditemukan link "Isi Kuisioner"');
            return;
        }
        
        console.log(`✅ Ditemukan ${kuisionerLinksList.length} link kuesioner`);
        kuisionerLinksList.forEach((link, index) => {
            console.log(`  ${index + 1}. ${link.textContent.trim()}`);
        });
        
        const nilai = customValue !== null ? customValue : getKuisionerValue();
        console.log(`\n🚀 Memulai proses autofill ${kuisionerLinksList.length} kuesioner dengan nilai ${nilai}...`);
        
        kuisionerLinksList[0].click();
        
        waitForModal(() => {
            setTimeout(() => {
                autoFillKuisioner(() => {
                    // Setelah submit selesai, lanjut ke kuesioner berikutnya
                    processNextKuisioner();
                }, customValue);
            }, 500);
        });
    }

    // Deteksi halaman dan jalankan otomatis jika di halaman kuesioner
    const isKuisionerPage = window.location.href.includes('/kuisioner/');
    
    if (isKuisionerPage) {
        console.log('📍 Di halaman kuesioner, mulai autofill...');
        setTimeout(() => {
            autoFillKuisioner();
        }, 500);
    } else {
        console.log('📍 Di halaman utama KHS');
        console.log('💡 Untuk autofill semua kuesioner, jalankan: autoFillAllKuisioner()');
        console.log('💡 Untuk autofill kuesioner saat ini, jalankan: autoFillKuisioner()');
    }

    // Expose fungsi ke global scope
    window.autoFillKuisioner = function(value) { autoFillKuisioner(null, value); };
    window.autoFillAllKuisioner = autoFillAllKuisioner;
    window.fillAllWithValue = fillAllWithValue;
    window.getKuisionerValue = getKuisionerValue;
    window.setKuisionerValue = setKuisionerValue;
    // Backward compatibility
    window.fillAllWithFive = function() { return fillAllWithValue(5); };

    const nilaiSaatIni = getKuisionerValue();
    console.log('✅ Skrip autofill kuesioner siap digunakan!');
    console.log(`📋 Nilai kuesioner saat ini: ${nilaiSaatIni} (${['Sangat tidak setuju', 'Tidak setuju', 'Cukup setuju', 'Setuju', 'Sangat setuju'][nilaiSaatIni - 1]})`);
    console.log('📋 Fungsi yang tersedia:');
    console.log('   - autoFillKuisioner() : Autofill kuesioner pada halaman saat ini');
    console.log('   - autoFillKuisioner(3) : Autofill dengan nilai 3');
    console.log('   - autoFillAllKuisioner() : Autofill semua kuesioner dengan nilai default');
    console.log('   - autoFillAllKuisioner(4) : Autofill semua dengan nilai 4');
    console.log('   - setKuisionerValue(3) : Set nilai default menjadi 3');
    console.log('   - getKuisionerValue() : Lihat nilai default saat ini');
    console.log('   - fillAllWithValue(5) : Isi radio button dengan nilai 5 (sekali)');
    console.log('   - fillAllWithFive() : Isi dengan nilai 5 (backward compatibility)');

})();

