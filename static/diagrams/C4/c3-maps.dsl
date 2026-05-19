workspace {
    
    !identifiers hierarchical
    
    model {
    
        softwareSystem = softwareSystem "On-Premise"{
        
        maps = container "Maps services" {
            
            front = group "Frontend side" {
                #webapp = component "Web App"
                msdk = component "Mobile SDK" "Enables adding maps to iOS/Android applications"
                mapgl = component "MapGL JS API" "Enabled adding maps to websites and web applications"
            }
            
            back = group "Server side" {
                nginx = component "NGINX web server" "Provides styles and icons"
                tiles = component "Tiles API" "Provides tiles to build maps from"
                tilegen = component "Tilegen API" "Enables generating tiles from user data"
                cassandra = component "Apache Cassandra" "Tiles storage" "" "storage"
                styles = component "Styles API" "Enabled uploading custom map styles"
                s3 = component "S3 compatible storage" "Data storage" "" "storage"
                postgresql = component "PostgreSQL" "Data storage" "" "storage"
                redis = component "Redis" "Data storage" "" "storage"
            }
            
            mapgl -> nginx "Gets JS library files and styles from"
            mapgl -> tiles "Gets vector tiles from"
            mapgl -> styles "Gets custom map styles from"
            tiles -> cassandra "Stores tiles at"
            tilegen -> s3 "Stores data at"
            tilegen -> redis "Stores data at"
            tilegen -> tiles "Sends user tiles to"
            msdk -> tiles "Gets mobile tiles from"
            styles -> s3 "Stores styles at"
            styles -> postgresql "Stores data at"
            
            }
            
            keys = container "API Keys service" {
                kback = component "API Keys backend" "Manages API keys" "" "nfocus"
            }
            
            license = container "License service" {
                lback = component "License service" "Provides access to On-Premise services" "" "nfocus"
            }
            
            proxy = container "Traffic Proxy service" {
                revproxy = component "NGINX reverse proxy" "Provides internet access to public servers with traffic data" "" "nfocus"
            }
            
            platform = container "GIS Platform" {
                spcore = component "SP Core" "Backend service that implements geospatial logic" "" "nfocus"
            }
            
            internet = container "Internet" {
                update = component "Public traffic update server" "Public servers to get and update traffic and other data" "" "external"
            }
            
            platform.spcore -> maps.tiles "Gets raster tiles from"
            maps.tiles -> keys.kback "Sends request metadata to"
            maps.tiles -> license.lback "Validates license using"
             
            maps.mapgl -> proxy.revproxy  "Gets traffic data from"
            maps.msdk -> proxy.revproxy "Gets traffic data from"
            proxy.revproxy -> internet.update "Gets traffic data from"
            
            

            
        }
    
    }
    
    views {
    
        component softwareSystem.maps "components" {
            include element.type==component
            autolayout tb 500 100
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
                color white
                opacity 70
            }
            element "nfocus" {
                opacity 70
            }
        }
    }

}