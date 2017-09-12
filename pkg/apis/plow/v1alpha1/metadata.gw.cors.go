// Code generated by protoc-gen-grpc-gateway-cors
// source: metadata.proto
// DO NOT EDIT!

/*
Package v1alpha1 is a reverse proxy.

It translates gRPC into RESTful JSON APIs.
*/
package v1alpha1

import "github.com/grpc-ecosystem/grpc-gateway/runtime"

// ExportMetadataCorsPatterns returns an array of grpc gatway mux patterns for
// Metadata service to enable CORS.
func ExportMetadataCorsPatterns() []runtime.Pattern {
	return []runtime.Pattern{
		pattern_Metadata_ListRegions_0,
		pattern_Metadata_ListZones_0,
		pattern_Metadata_ListBuckets_0,
	}
}
