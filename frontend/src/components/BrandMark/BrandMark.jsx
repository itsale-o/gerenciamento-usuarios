import "./BrandMark.css";


function BrandMark({ branding }) {
    if (!branding) {
        return <div className="sidebar-brand-loading" aria-hidden="true" />;
    }

    return (
        <div className="sidebar-brand">
            {branding?.logoUrl ? (
                <img src={branding.logoUrl} alt="" className="sidebar-brand-image" />
            ) : (
                <svg width="38" height="38" viewBox="0 0 56 56" fill="none" aria-hidden="true">
                    <path d="M28 4 L40 16 L28 16 Z" fill="#2E7DD1" />
                    <path d="M52 28 L40 40 L40 28 Z" fill="#F2A93B" />
                    <path d="M28 52 L16 40 L28 40 Z" fill="var(--brand-accent, #4CAF50)" />
                    <path d="M4 28 L16 16 L16 28 Z" fill="#E5473A" />
                </svg>
            )}
            <span>{branding.companyName}</span>
        </div>
    );
}

export default BrandMark