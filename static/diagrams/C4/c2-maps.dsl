workspace {
    
    !identifiers hierarchical
    
    model {
    
        softwareSystem = softwareSystem "On-Premise"{

        license = container "License service" "Provides access to On-Premise services"
        map = container "Maps" "Enables displaying maps in web applications, websites, and mobile applications" "" "focus"
        platform = container "GIS Platform" "Web-based GIS solution for performing geoanalytical tasks"
        citylens = container "CityLens" "Captures images through a mobile app and processes them using AI"
        mobilesdk = container "Mobile SDK" "Provides tools for building Android/iOS mobile applications"
        pro = container "Pro" "Enables analyzing geodata for business"
        keys = container "API Keys service" "Enables managing API keys"
        gefest = container "Platform Manager" "Provides API playgrounds in local network"
        
        map -> license "Checks license status using"
        map -> keys "Sends request metadata to"
        platform -> map "Gets Basemap using"
        citylens -> map "Gets map data from"
        mobilesdk -> map "Gets map data from"
        pro -> map "Displays map using"
        gefest -> map "Creates a playground with interactive map using"
            
        }
        
        public = softwareSystem "Internet" {
            
            servers = container "Public update servers" "Public servers to get and update traffic and other data" "" "external"
        }
        
        softwareSystem.map -> public.servers "Gets traffic data from"

    
    }
    
    views {
    
        container softwareSystem "All" {
            include element.type==container
            autolayout lr 300 200
        }
        
        
        styles {
            element "Element" {
                background #1168bd
                color #ffffff
                opacity 60
            }
            element "storage" {
                shape cylinder
                background #dddddd
                color #000000
            }
            element "external" {
                background green
            }
            element "focus" {
                opacity 100
            }
        }
    }

}