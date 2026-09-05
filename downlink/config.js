/* ============================================================
   Simple Downlink — shared beep configuration
   Stored locally on the device via localStorage. Never synced.
   Used by index.html (playback) and config.html (editing).
   ============================================================ */

var DL_CONFIG_KEY = 'downlinkBeepConfig';

/* Bit periods that get their own warning lead time */
var DL_PERIODS = [18, 36, 60];

/* Frequency slots: key -> label used on the config page */
var DL_FREQ_KEYS = ['warn', 'lowToHigh', 'highToLow'];

var DL_DEFAULTS = {
    lead: { 18: 3, 36: 3, 60: 3 },   // seconds of countdown beeps before a change
    freq: {
        warn:      1200,             // short countdown beeps
        lowToHigh: 1200,             // long beep on LOW  -> HIGH
        highToLow: 1200              // long beep on HIGH -> LOW
    }
};

var DL_LIMITS = {
    leadMin: 3,   leadMax: 10,       // seconds
    freqMin: 200, freqMax: 4000      // Hz
};

/* Beep lengths (ms) — shared so the config page's Test button
   sounds exactly like the real thing. */
var DL_BEEP_SHORT_MS = 200;          // countdown warning
var DL_BEEP_LONG_MS  = 800;          // state change

function dlClamp(value, min, max, fallback) {
    var n = Number(value);
    if (!isFinite(n)) return fallback;
    return Math.min(max, Math.max(min, Math.round(n)));
}

/* Read config from localStorage, falling back to defaults for
   anything missing, out of range, or corrupt. */
function dlLoadConfig() {
    var cfg = {
        lead: { 18: DL_DEFAULTS.lead[18], 36: DL_DEFAULTS.lead[36], 60: DL_DEFAULTS.lead[60] },
        freq: { warn: DL_DEFAULTS.freq.warn, lowToHigh: DL_DEFAULTS.freq.lowToHigh, highToLow: DL_DEFAULTS.freq.highToLow }
    };

    try {
        var raw = localStorage.getItem(DL_CONFIG_KEY);
        if (!raw) return cfg;

        var saved = JSON.parse(raw);

        DL_PERIODS.forEach(function (p) {
            if (saved && saved.lead && saved.lead[p] != null) {
                cfg.lead[p] = dlClamp(saved.lead[p], DL_LIMITS.leadMin, DL_LIMITS.leadMax, DL_DEFAULTS.lead[p]);
            }
        });

        DL_FREQ_KEYS.forEach(function (k) {
            if (saved && saved.freq && saved.freq[k] != null) {
                cfg.freq[k] = dlClamp(saved.freq[k], DL_LIMITS.freqMin, DL_LIMITS.freqMax, DL_DEFAULTS.freq[k]);
            }
        });
    } catch (e) {
        console.warn('Beep config unreadable — using defaults.', e);
    }

    return cfg;
}

function dlSaveConfig(cfg) {
    try {
        localStorage.setItem(DL_CONFIG_KEY, JSON.stringify(cfg));
        return true;
    } catch (e) {
        console.error('Could not save beep config.', e);
        return false;
    }
}

/* Wipe stored settings and hand back a fresh default set. */
function dlResetConfig() {
    try {
        localStorage.removeItem(DL_CONFIG_KEY);
    } catch (e) {
        console.error('Could not clear beep config.', e);
    }
    return dlLoadConfig();
}

/* Lead time for a bit period, guarded against unknown periods. */
function dlLeadFor(cfg, bitPeriod) {
    var lead = cfg && cfg.lead ? cfg.lead[bitPeriod] : null;
    return lead == null ? DL_DEFAULTS.lead[18] : lead;
}

/* Single square-wave tone — the one place audio is produced,
   so the config page and the app can never drift apart. */
function dlPlayTone(ctx, frequency, durationMs) {
    try {
        var oscillator = ctx.createOscillator();
        oscillator.frequency.value = frequency;
        oscillator.type = 'square';
        oscillator.connect(ctx.destination);
        oscillator.start();
        setTimeout(function () {
            oscillator.stop();
        }, durationMs);
    } catch (e) {
        console.error('Audio play failed', e);
    }
}
