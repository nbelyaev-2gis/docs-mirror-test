# Диаграмма всех контейнеров (продуктов) без подписей стрелок

workspace {
    
    !identifiers hierarchical
    
    model {
    
        softwareSystem = softwareSystem "On-Premise"{
        
        install = group "Installation tool" {
        
            dgcli = container "DGCLI" "Utility for getting artifacts for service deployment" "CLI" "nfocus"
            #storage = container "File/Object storage" "Storage for data" "S3 compatible storage" "storage"
            #registry = container "Docker Registry" "Docker registry to store images of services" "Docker" "storage"
                
            #dgcli -> storage
            #dgcli -> registry
            
        }

        license = container "License service" "Provides access to On-Premise services"
        map = container "Maps" "Enables displaying maps in web applications, websites, and mobile applications"
        search = container "Search" "Enables obtaining information on objects"
        navi = container "Navigation" "Enables building routes and getting route information"
        platform = container "GIS Platform" "Web-based GIS solution for performing geoanalytical tasks"
        citylens = container "CityLens" "Captures images through a mobile app and processes them using AI"
        mobilesdk = container "Mobile SDK" "Provides tools for building Android/iOS mobile applications"
        pro = container "Pro" "Enables analyzing geodata for business"
        keys = container "API Keys service" "Enables managing API keys"
        gefest = container "Platform Manager" "Provides API playgrounds in local network"
        
        map -> license
        map -> keys
        
        search -> license
        search -> keys
        
        platform -> map
        platform -> search
        platform -> navi
        platform -> keys
        
        navi -> keys
        
        citylens -> map
        citylens -> search
        citylens -> navi
        citylens -> pro
        
        mobilesdk -> map
        mobilesdk -> search
        mobilesdk -> navi
        
        pro -> map
        pro -> search
        pro -> navi
        pro -> keys
        
        gefest -> map
        gefest -> navi
        gefest -> search
            
        }
        
        public = softwareSystem "Internet" {
            
            servers = container "Public update servers" "Public servers to get and update traffic and other data" "" "external, nfocus"
        }
        
        softwareSystem.dgcli -> public.servers

    
    }
    
    views {
    
        container softwareSystem "All" {
            include element.type==container
            autolayout rl 400 200
        }
        
        
        
        styles {
            element "Element" {
                background #1168bd
                color #ffffff
            }
            element "storage" {
                shape cylinder
                background #dddddd
                color #000000
            }
            element "external" {
                background green
            }
            element "nfocus" {
                opacity 60
            }
        }
    }

}